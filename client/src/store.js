import {createStore, combineReducers, applyMiddleware} from 'redux'
import dialogueReducer from "./reducers/dialogues";
import thunk from "redux-thunk";

const createAppStore = (initialState) =>
  createStore(
    combineReducers({
        dialogues: dialogueReducer,
        user: (state = {}) => state
    }),
    initialState,
      applyMiddleware(thunk)
  )

export default createAppStore({
  user: {
    id: null,
    name: 'Anonymous',
    roles: [],
  }
})