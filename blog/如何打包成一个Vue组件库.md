## 前言
大多数的教程写都是使用最直接的方式，即使用webpack的lib模式进行打包，一些教程的区别可能在于使用Vue-cli2/vue-cli3的形式而已，这里罗列一下简单的组件库模板是怎么生成的，本教程以vue-cli3为例。

## 最直接的方式
使用vue-cli创建一个模板（随意），以生成的目录来改造，需要做的改动如下：
1.  将原有的src目录改为examples，用于存放示例代码，改的目的是为了命名上更好的区分功能模块
2. 在根目录下新建一个packages目录，用于存放组件库代码
3. 接着修改vue.config.js文件（根目录下，没有则创建一个）
```js
module.exports = {
    // 修改src目录为examples目录
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 扩展webpack配置，使packages加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
                .add('/packages')
                .end()
            .use('babel')
                .loader('babel-loader')
                .tap(options => options);
    }
}
```
4. 创建组件库文件，首先在packages下创建一个index.js作为组件库入口，对整个组件库进行导出
```js
import BaseComp from './packages/BaseComp.vue';

const install = function (Vue) {
    // 全局注册组件
    Vue.component('BaseComp', BaseComp);
}

export {
    install,
    BaseComp
}

export default {
    install
}
```
5. 改造package.json
    - 调整打包脚本，scripts新增打包命令
    - 调整main字段，指向打包后的lib入口：lib/your-lib-name.umd.min.js
```json
{
    "main": "lib/your-lib-name.umd.min.js",
    "scripts": {
        "build:lib": "vue-cli-service build --target lib --name your-lib-name --dest lib packages/index.js"
    }
}
```
6. 发布到npm（非必须的步骤，也可以用git仓库），业务系统直接npm i引入即可

经过上述步骤，一个基本的组件库模板就出来了。那么问题来了，`build:lib`命令各个参数是什么意思呢？以下来拆段分析：
- `vue-cli-service build`: 打包命令，不解释~
- `--target lib`: 构建目标为**库**文件
- `--name your-lib-name`: 库的名字为**your-lib-name**
- `--dest lib`: 编译后的库文件输出目录，指定为lib
- `packages/index.js`: 编译入口

运行打包命令后，就会输出打包后的文件，编译后的文件umd模块和commonjs模块都有，这里我们选择umd模块，作为库的入口

## 折腾
如果对组件库没有太多要求的话，直接方式打包就已经够用了，但作为一个开发就喜欢多折腾，折腾什么呢？想要让组件库进行**按需加载**。为了达成这个目标，就不能使用直接打包的方式一把梭搞定了，需要做以下调整：
- 多组件入口打包
- 导出ES Module

ok，知道了以上的目标，接下来就好调整了

### 多组件入口打包
在一开始的库项目中，我们是把所有组件聚合到一起导出的，即打包的入口`packages/index.js`。如果对文章前面的内容还有印象的话，可以知道导出语句写了两种：`export` && `export default`，那问题来了，有export语句，不是可以通过`import { SomeComp } from YourComps`来局部导入么？嗯，写是可以这么写，但按照我们之前的打包方式，导出的是一整个打包好的comp.umd.js文件，webpack的tree shaking是无法将不引入的其它组件剔除掉的。所以，局部导入也就是写法上的一种方便罢了，没有多少实际上的意义。实现按需加载的目标，需要先将项目目录结构进行如下转换
```
- packages
-- some-comp
--- index.js
--- SomeComp.js
--- index.scss
-- some-comp2
...
```
### 导出ES Module
上一步的操作，实际上是为导出ES Module做准备的。我们知道，JavaScript在ES6前是没有原生模块系统的，社区给出了一些解决方案，如`AMD/CMD/UMD`，ES6开始JavaScript就有了`ES Module`，原生的模块系统采用的是静态编译，得益于静态编译可以做到在编译阶段就可以确定哪些模块是真正被使用，哪些模块是绝对不会用到的，也就是可以做tree shaking。在vue-cli中打包成的target只支持umd/common.js，而不支持ES Module的形式，咋整呢？如果让业务系统直接引用到库中的单个组件，交由业务系统本身去编译，这事其实就算完成了。

编写转换脚本，使用babel转换一次，导出成ES Module
```js
/* 文件所在路径 build/build-component.js */
/* 编译组件 */
const fs = require('fs-extra');
const babel = require('@babel/core');
const path = require('path');

const esDir = path.join(__dirname, '../es');
const srcDir = path.join(__dirname, '../packages');
const babelConfig = {
    configFile: path.join(__dirname, '../babel.config.js')
};

const scriptRegExp = /\.(js|ts|tsx)$/;
const isScript = path => scriptRegExp.test(path);

/**
 * 是否是文件目录
 * @param {string} dir 
 */
const isDir = dir => fs.lstatSync(dir).isDirectory();

/**
 * 编译指定目录
 * @param {string} dir 
 */
function compile(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);

        // scan dir
        if (isDir(filePath)) {
            return compile(filePath);
        }

        // compile js or ts
        if (isScript(file)) {
            const { code } = babel.transformFileSync(filePath, babelConfig);
            fs.removeSync(filePath);
            fs.outputFileSync(filePath.replace(scriptRegExp, '.js'), code);
        }
    });
}

// 清除目录
fs.emptyDirSync(esDir);
// 编译目录
fs.copySync(srcDir, esDir)
compile(esDir);
```
在package.json新增一个命令：
```json
"build:es": "node build/build-component.js"
```
运行`build:es`即可成功导出es模块

## 按需引入
按需引入针对的是业务系统，当前有两个流行的方案，分别是
- babel-plugin-import
- babel-plugin-component

两种方案的本质，都是缩短了业务系统引入库文件时的路径罢了，以babel-plugin-import为例，使用的对比如下：
```js
/* 不使用babel-plugin-import */
import SomeComp from 'YourComp/es/some-comp/index.js' 

/* 使用babel-plugin-import */
import { SomeComp } from 'YourComp'
```
可以的话肯定选择下面那种导入形式对吧，可以不用知道要导入的组件究竟在哪个目录下，要达到这个目的需要在**业务系统**中的`babel.config.js`进行如下配置
```js
module.exports = {
    ...,
    plugins: [
        ['import', {
            libraryName: 'your-lib-name',
            libraryDirectory: 'es'
        }, 'your-lib-name']
    ]
};
```