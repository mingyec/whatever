import Vue from 'vue';
import App from './App.vue';
import loading from '../package/index';

Vue.use(loading);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
