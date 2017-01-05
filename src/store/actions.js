import * as types from './mutation_types'

export const setCurrentKana = ({ commit, state }) => {
  let kana = state.kanadb[Math.floor(Math.random() * state.kanadb.length)]
  while (!state.options.activeKanaTypes.includes(kana.type)) {
    kana = state.kanadb[Math.floor(Math.random() * state.kanadb.length)]
  }

  commit(types.SET_CURRENT_RANDOM_KANA, kana)
  commit(types.INCREMENT_KANA_SHOWN_COUNT, kana)
  commit(types.INCREMENT_KANA_SKIPPED_COUNT, kana)
}

export const submitAnswer = ({ commit, state }, answer) => {
  if (!state.volatile.hasAnswered) {
    if (answer.toLowerCase() === state.volatile.currentKana.romanji) {
      commit(types.INCREMENT_KANA_SUCCESS_COUNT, state.volatile.currentKana)
      commit(types.USER_ANSWERED_CORRECTLY)
    } else {
      commit(types.INCREMENT_KANA_FAILURE_COUNT, state.volatile.currentKana)
      commit(types.USER_ANSWERED_INCORRECTLY)
    }

    commit(types.DECREMENT_KANA_SKIPPED_COUNT, state.volatile.currentKana)
    commit(types.USER_HAS_ANSWERED)
  }
}

export const updateUnansweredExitMessageOption = ({ commit, state }) => {
  commit(types.UPDATE_UNANSWERED_EXIT_MESSAGE_OPTION)
}

export const updateActiveKanaTypes = ({ commit, state, dispatch }, value) => {
  if (value === 'both') {
    commit(types.UPDATE_ACTIVE_KANA_TYPES_OPTION, ['hiragana', 'katakana'])
  } else {
    commit(types.UPDATE_ACTIVE_KANA_TYPES_OPTION, [value])
  }

  dispatch('resetQuiz')
}

export const resetQuiz = ({ commit, state, dispatch }, value) => {
  if (!state.volatile.hasAnswered) {
    commit(types.DECREMENT_KANA_SKIPPED_COUNT, state.volatile.currentKana)
  }

  commit(types.RESET_VOLATILE_DATA)
  dispatch('setCurrentKana')
}
