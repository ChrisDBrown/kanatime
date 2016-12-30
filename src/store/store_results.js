const storeResults = store => {
  store.subscribe((mutation, state) => {
    const currentlyStored = window.localStorage.getItem('results')
    const toStore = JSON.stringify(state.results)
    if (toStore !== currentlyStored) {
      window.localStorage.setItem('results', toStore)
    }
  })
}

export default storeResults
