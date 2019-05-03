import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  /* getters类似于组件中computed属性，对state的值进行过滤修改 */
  getters: {}
})
