import Vue from 'vue'
import numeral from 'numeral';
import App from './App.vue'
import numFormat from './filter-number-format';

Vue.filter('numFormat', numFormat(numeral));

new Vue({
  el: '#app',
  render: h => h(App)
})
