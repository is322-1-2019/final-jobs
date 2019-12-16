import Vue from 'vue'
import App from './App.vue'

import './plugins/buefy-vue';
import { router } from "./router";
import "./plugins/vuelidate";
import "./plugins/firebase";

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router

}).$mount('#app')
