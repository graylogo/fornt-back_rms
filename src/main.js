import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '../public/css/reset.css';
import '../public/css/index.css';
import store from "@/store";
import router from './router';
import axios from "axios";

Vue.use(ElementUI)

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
