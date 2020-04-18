import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core';

dom.watch()

library.add(fas, fab, far)

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
