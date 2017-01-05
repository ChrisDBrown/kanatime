import * as types from './mutation_types'

function getResultWeight (result) {
  return (5 * result.success) + result.skipped + result.failure
}

function kanaForResult (kana) {
  return kana.id === this.id
}

export const setCurrentKana = ({ commit, state }) => {
  let lowestWeightResultGroup = []
  let lowestWeight = Infinity

  state.results.forEach(result => {
    const resultWeight = getResultWeight(result)

    if (resultWeight <= lowestWeight) {
      const kana = state.kanadb.find(kanaForResult, result)

      if (state.options.activeKanaTypes.includes(kana.type)) {
        if (resultWeight < lowestWeight) {
          lowestWeightResultGroup = [result]
          lowestWeight = resultWeight
        } else {
          lowestWeightResultGroup.push(result)
        }
      }
    }
  })

  const result = lowestWeightResultGroup[Math.floor(Math.random() * lowestWeightResultGroup.length)]
  const kana = state.kanadb.find(kanaForResult, result)

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
