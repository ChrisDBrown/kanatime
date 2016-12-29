import * as types from './mutation_types'

const mutations = {
  [types.SET_CURRENT_RANDOM_KANA] (state, kana) {
    state.volatile.currentKana = kana
  }
}

export default mutations
