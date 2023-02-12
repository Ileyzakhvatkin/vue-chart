import Vue from 'vue';
import AppStat from './AppStat.vue';
import AppGrag from './AppGrag.vue';
// import router from './router';
// import store from './store';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(AppStat),
}).$mount('#appstat');

new Vue({
  render: (h) => h(AppGrag),
}).$mount('#appgraf');
