import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import usersReducer from "./reducers/users";
import resitsReducer from "./reducers/resits";
import {refreshUser} from "./actions/users";

const createAppStore = (initialState) =>
  createStore(
    combineReducers({
        resits: resitsReducer,
        user: usersReducer,
    }),
    initialState,
      applyMiddleware(thunk)
  )

const userInitialState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {
    id: null,
    username: 'Anonymous',
    email: null,
    token: null,
    bio: null,
    image: null,
    isTeacher: false,
}

const store = createAppStore({
    user: userInitialState
});


export default store;