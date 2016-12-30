import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import baseDb from './db'

let db = {}
if (window.localStorage.getItem('db')) {
  db = JSON.parse(window.localStorage.getItem('db'))
} else {
  db = baseDb
}

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db,
    volatile: {
      currentKana: false,
      hasAnswered: false,
      answeredCorrectly: false
    }
  },
  getters,
  mutations,
  actions,
  strict: debug
})
