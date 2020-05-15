import SvgIcon from './index.vue'

const install = function (Vue, options) {
    console.info(options)
    // 不重复安装
    if (install.installed) return;
    Vue.component('svg-icon', SvgIcon);
}

const req = require.context('./Svg', false, /\.svg$/);
console.info(req.keys())
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);

export default {
    install
}