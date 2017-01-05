import * as types from './mutation_types'

function resultsForKana (result) {
  return result.id === this.id
}

const mutations = {
  [types.SET_CURRENT_RANDOM_KANA] (state, kana) {
    state.volatile.currentKana = kana
    const index = state.results.findIndex(resultsForKana, kana)
    state.volatile.currentResults = state.results[index]
  },
  [types.USER_HAS_ANSWERED] (state) {
    state.volatile.hasAnswered = true
  },
  [types.RESET_VOLATILE_DATA] (state) {
    state.volatile = {
      currentKana: false,
      currentResults: false,
      hasAnswered: false,
      answeredCorrectly: false
    }
  },
  [types.USER_ANSWERED_CORRECTLY] (state) {
    state.volatile.answeredCorrectly = true
  },
  [types.USER_ANSWERED_INCORRECTLY] (state) {
    state.volatile.answeredCorrectly = false
  },
  [types.INCREMENT_KANA_SHOWN_COUNT] (state, kana) {
    const index = state.results.findIndex(resultsForKana, kana)
    state.results[index].shown++
  },
  [types.INCREMENT_KANA_SKIPPED_COUNT] (state, kana) {
    const index = state.results.findIndex(resultsForKana, kana)
    state.results[index].skipped++
  },
  [types.INCREMENT_KANA_SUCCESS_COUNT] (state, kana) {
    const index = state.results.findIndex(resultsForKana, kana)
    state.results[index].success++
  },
  [types.INCREMENT_KANA_FAILURE_COUNT] (state, kana) {
    const index = state.results.findIndex(resultsForKana, kana)
    state.results[index].failure++
  },
  [types.DECREMENT_KANA_SKIPPED_COUNT] (state, kana) {
    const index = state.results.findIndex(resultsForKana, kana)
    state.results[index].skipped--
  },
  [types.UPDATE_UNANSWERED_EXIT_MESSAGE_OPTION] (state) {
    state.options.showUnansweredExitMessage = !state.options.showUnansweredExitMessage
  },
  [types.UPDATE_ACTIVE_KANA_TYPES_OPTION] (state, value) {
    state.options.activeKanaTypes = value
  }
}

export default mutations
