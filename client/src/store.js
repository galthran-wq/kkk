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


// todo i'm not sure whether it is a good way; on action REFRESH_USER i import this initial state
export const getEmptyUserState = () => {
    return {
        id: null,
        username: 'Anonymous',
        email: null,
        token: null,
        bio: null,
        image: null,
        isTeacher: false,
    }
}
// todo precisely, i reckon there is a more suitable way to manipulate local storage, and inter-session token handling
//      in one place -- in reducers
//  However, i don't see a clever way to do that
const userInitialState = {...getEmptyUserState(), token: localStorage.getItem('token')}

const store = createAppStore({
    user: userInitialState
});


export default store;