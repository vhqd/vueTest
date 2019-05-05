import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Detail from '@/components/Detail'
import Friend from '@/components/Friend'
import Me from '@/components/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/friend',
      name: 'friedn',
      component: Friend
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
