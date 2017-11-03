import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NetworkGraph from '@/components/NetworkGraph'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/graph',
      name: 'Network Graph',
      component: NetworkGraph
    }
  ]
})
