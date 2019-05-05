// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Vuex from 'vuex'
import MuseUI from 'muse-ui'
import Vant from 'vant'
import './common/js/auto-size.js'

import 'muse-ui/dist/muse-ui.css'
import 'vant/lib/index.css'
import './common/css/base.css'

Vue.use(MuseUI)
Vue.use(Vant)
Vue.use(Vuex)

Vue.config.productionTip = false

window.addEventListener('popstate', function (e) {
  router.isBack = true
},false)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
