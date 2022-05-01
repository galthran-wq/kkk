import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import usersReducer from "./reducers/users";
import resitsReducer from "./reducers/resits";

const createAppStore = (initialState) =>
  createStore(
    combineReducers({
        resits: resitsReducer,
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