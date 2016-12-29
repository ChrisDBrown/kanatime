import * as types from './mutation_types'

export const setCurrentKana = (context) => {
  const kana = context.state.db[Math.floor(Math.random() * context.state.db.length)]
  context.commit(types.SET_CURRENT_RANDOM_KANA, kana)
}
