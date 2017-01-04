import Vue from 'vue'
import Vuex from 'vuex'
import { storeResults, storeOptions } from './store_persisted_data'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import kanadb from '../assets/kana_db'
import { results, options } from './build_persisted_data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kanadb,
    results,
    options,
    volatile: {
      currentKana: false,
      currentResults: false,
      hasAnswered: false,
      answeredCorrectly: false
    }
  },
  getters,
  mutations,
  actions,
  plugins: [storeResults, storeOptions],
  strict: process.env.NODE_ENV !== 'production'
})
