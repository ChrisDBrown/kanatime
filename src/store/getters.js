export const randomKana = state => {
  return state.volatile.currentKana
}

export const hasAnswered = state => {
  return state.volatile.hasAnswered
}

export const answeredCorrectly = state => {
  return state.volatile.answeredCorrectly
}
