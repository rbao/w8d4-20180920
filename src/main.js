import router from './router'
import Vue from 'vue'
import App from './App.vue'
import UrlList from './components/url-list'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
