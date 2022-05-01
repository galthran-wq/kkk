import {REMOVE_USER, SET_USER} from "../actions/types";
import {getEmptyUserState} from "../store";


export default function usersReducer(state = [], action) {
    switch (action.type) {
        case SET_USER:
            const user = action.payload;
            state = user;
            localStorage.setItem('token', user.token);
            console.log(state);
            break;
        case REMOVE_USER:
            localStorage.removeItem('token');
            // todo
            state = getEmptyUserState();
            break;
        default:
            break;
    }
    return state;
}
