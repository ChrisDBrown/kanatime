import * as types from './mutation_types'

export const setCurrentKana = ({ commit, state }) => {
  const kana = state.db[Math.floor(Math.random() * state.db.length)]
  commit(types.SET_CURRENT_RANDOM_KANA, kana)
  commit(types.INCREMENT_KANA_SHOWN_COUNT, kana)
  commit(types.INCREMENT_KANA_SKIPPED_COUNT, kana)
}

export const submitAnswer = ({ commit, state }, answer) => {
  if (!state.volatile.hasAnswered) {
    if (answer === state.volatile.currentKana.romanji) {
      commit(types.INCREMENT_KANA_SUCCESS_COUNT, state.volatile.currentKana)
    } else {
      commit(types.INCREMENT_KANA_FAILURE_COUNT, state.volatile.currentKana)
    }
    commit(types.DECREMENT_KANA_SKIPPED_COUNT, state.volatile.currentKana)
    commit(types.USER_HAS_ANSWERED)
    window.localStorage.setItem('db', JSON.stringify(state.db))
  }
}
