import Vue from 'vue'
import Vuex from 'vuex'
import storeResults from './store_results'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import kanadb from '../assets/kana_db'

let results = []
if (window.localStorage.getItem('results')) {
  results = JSON.parse(window.localStorage.getItem('results'))
} else {
  results = kanadb.map(kana => ({
    'id': kana.id,
    'success': 0,
    'failure': 0,
    'skipped': 0,
    'shown': 0
  }))
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    kanadb,
    results,
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
  plugins: [storeResults],
  strict: process.env.NODE_ENV !== 'production'
})
