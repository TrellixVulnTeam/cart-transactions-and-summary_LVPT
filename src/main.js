import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
//import VueMobileDetection from "vue-mobile-detection";

Vue.config.productionTip = false
//Vue.use(VueMobileDetection);
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
