import {createStore, combineReducers, applyMiddleware} from 'redux'
import dialoguesReducer from "./reducers/dialogues";
import thunk from "redux-thunk";
import usersReducer from "./reducers/users";

const createAppStore = (initialState) =>
  createStore(
    combineReducers({
        dialogues: dialoguesReducer,
        user: usersReducer,
    }),
    initialState,
      applyMiddleware(thunk)
  )

export default createAppStore({
  user: {
    id: null,
    username: 'Anonymous',
    email: null,
    token: null,
    bio: null,
    image: null,
      isTeacher: false,
  }
})