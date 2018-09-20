import Vue from 'vue'
import Router from 'vue-router'
import UrlList from '@/components/url-list'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/urls',
      name: 'UrlList',
      component: UrlList
    },
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
