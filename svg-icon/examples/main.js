import Vue from "vue";
import App from "./App.vue";
import SvgIcon from '../package/index.js'

Vue.use(SvgIcon, __dirname + 'icons')

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
