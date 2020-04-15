import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
library.add(faUserSecret)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)


axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
