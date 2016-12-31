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

export const resultsHistory = state => {
  const history = state.kanadb.map(function (kana) {
    const matchingResults = this.find(results => results.id === kana.id)
    kana.results = matchingResults
    return kana
  }, state.results)
  return history
}
