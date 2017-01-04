const storeResults = store => {
  store.subscribe((mutation, state) => {
    const currentlyStored = window.localStorage.getItem('results')
    const toStore = JSON.stringify(state.results)
    if (toStore !== currentlyStored) {
      window.localStorage.setItem('results', toStore)
    }
  })
}

const storeOptions = store => {
  store.subscribe((mutation, state) => {
    const currentlyStored = window.localStorage.getItem('options')
    const toStore = JSON.stringify(state.options)
    if (toStore !== currentlyStored) {
      window.localStorage.setItem('options', toStore)
    }
  })
}

export { storeResults, storeOptions }
