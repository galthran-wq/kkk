import { createStore, combineReducers } from 'redux'

const createAppStore = (initialState) =>
  createStore(
      function (state, action) { return state },
    // combineReducers({
    //   checkboxes: checkboxReducer,
    // }),
    initialState,
  )

export default createAppStore({
  user: {
    id: null,
    name: 'Anonymous',
    roles: [],
  }
})