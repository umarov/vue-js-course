import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.config.devtools = !!process.env.NODE_ENV;

Vue.filter('currency', (value: number) => {
  if (value) {
    const stringified = value.toString();
    if (stringified.length > 4) {
      return `$${stringified.substring(0, 2)},${stringified.substring(2)}`;
    } else if (stringified.length > 3) {
      return `$${stringified.substring(0, 1)},${stringified.substring(1)}`;
    } else {
      return `$${value}`;
    }
  } else {
    return '$0';
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
