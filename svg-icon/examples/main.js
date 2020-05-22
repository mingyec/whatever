import Vue from "vue";
import App from "./App.vue";
import SvgIcon from '../package/index.js'

const req = require.context('./icons', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);

Vue.use(SvgIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
