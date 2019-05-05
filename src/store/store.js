import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabbarShow: true,//控制是否显示Tabbar
        tabbarPath: ['/', '/home', '/search', '/friend', '/me']//用于Tabbar的active效果
    },

    getters: {
        getTabbarShow(state) {
            return state.tabbarShow
        },
        getTabbarPath(state) {
            return state.tabbarPath
        }
    },

    mutations: {
        updateTabbarShow(state, payload) {
            state.tabbarShow = payload
        }
    }
})