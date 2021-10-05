import Vue from 'vue'
import Vuex from 'vuex'
import { setItem,getItem } from "@/utils/storage"
Vue.use(Vuex)
const EVENT_KEY='EVENT_USER'
export default new Vuex.Store({
  state: {
    // user: JSON.parse(window.localStorage.getItem(EVENT_KEY))
    user: getItem(EVENT_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止刷新丢失，我们需要把数据备份到本地存储
      // window.localStorage.setItem(EVENT_KEY, JSON.stringify(state.user))
      setItem(EVENT_KEY,state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
