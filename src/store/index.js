import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import db from './db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db,
    volatile: {
      currentKana: false,
      hasGuessed: false
    }
  },
  getters,
  mutations,
  actions
})
