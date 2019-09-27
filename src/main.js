import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './routes';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(BootstrapVue)

const router = new Router({
  mode: 'history',
  routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
