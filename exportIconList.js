// 读取项目ICON，导出为可引用文件
const fs = require('fs');
const path = require('path');

// 匹配图标类
const ICON_REG = /icon-\w+(?=:before)/g;

// 文件绝对路径
const iconCssPath = path.join(__dirname, './iconfont.css');
const iconListPath = path.join(__dirname, './iconList.js');

(async function run(_path) {
    try {
        // 读取icon css文件
        const file = await fs.readFileSync(_path);
        const fileStr = file.toString();
        // 获取到图标集合
        const iconNameList = fileStr.match(ICON_REG);
        // 生成icon list 文件数据
        const iconListFile = `export default ${JSON.stringify(iconNameList)}`;
        // 写入
        await fs.writeFileSync(iconListPath, iconListFile);
        console.info('generate iconList successful!');
    } catch (error) {
        console.log(`gererate iconList error: ${iconCssPath}`, error);
    }
})(iconCssPath);
