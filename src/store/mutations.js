import * as types from './mutation_types'

function matchingHiragana (current) {
  return current.hiragana === this.hiragana
}

const mutations = {
  [types.SET_CURRENT_RANDOM_KANA] (state, kana) {
    state.volatile.currentKana = kana
  },
  [types.USER_HAS_ANSWERED] (state) {
    state.volatile.hasAnswered = true
  },
  [types.INCREMENT_KANA_SHOWN_COUNT] (state, kana) {
    const index = state.db.findIndex(matchingHiragana, kana)
    state.db[index].results.shown++
  },
  [types.INCREMENT_KANA_SKIPPED_COUNT] (state, kana) {
    const index = state.db.findIndex(matchingHiragana, kana)
    state.db[index].results.skipped++
  },
  [types.INCREMENT_KANA_SUCCESS_COUNT] (state, kana) {
    const index = state.db.findIndex(matchingHiragana, kana)
    state.db[index].results.success++
  },
  [types.INCREMENT_KANA_FAILURE_COUNT] (state, kana) {
    const index = state.db.findIndex(matchingHiragana, kana)
    state.db[index].results.failure++
  },
  [types.DECREMENT_KANA_SKIPPED_COUNT] (state, kana) {
    const index = state.db.findIndex(matchingHiragana, kana)
    state.db[index].results.skipped--
  }
}

export default mutations
