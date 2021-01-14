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

## 直接打包带来的问题
如果对组件库没有太多要求的话，直接方式打包就已经够用了，但作为一个开发就喜欢多折腾，折腾什么呢？想要让组件库进行**按需加载**。为了达成这个目标，就不能使用直接打包的方式一把梭搞定了，需要做以下调整：
- 多组件入口打包
- 导出ES Module