import Vue from 'vue'
import App from './App.vue'
import numFormat from './filter-number-format';

Vue.filter('numFormat', numFormat);

new Vue({
  el: '#app',
  render: h => h(App)
})
