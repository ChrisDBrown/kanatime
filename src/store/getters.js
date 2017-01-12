export const randomKana = state => {
  return state.volatile.currentKana
}

export const randomKanaResults = state => {
  return state.volatile.currentResults
}

export const hasAnswered = state => {
  return state.volatile.hasAnswered
}

export const answeredCorrectly = state => {
  return state.volatile.answeredCorrectly
}

export const showUnansweredExitMessage = state => {
  return state.options.showUnansweredExitMessage
}

export const activeKanaTypes = state => {
  return state.options.activeKanaTypes
}

export const resultsHistory = state => {
  const history = state.kanadb.map(function (kana) {
    const matchingResults = this.find(results => results.id === kana.id)
    let successPercentage = (matchingResults.success / matchingResults.shown) * 100
    if (isNaN(successPercentage)) {
      successPercentage = '-'
    } else {
      successPercentage = Math.round(successPercentage) + '%'
    }
    kana.results = matchingResults
    kana.successPercentage = successPercentage
    return kana
  }, state.results)
  return history
}
