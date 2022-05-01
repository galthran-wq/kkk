import {SET_USER} from "../actions/types";

export default function usersReducer(state = [], action) {
    switch (action.type) {
        case SET_USER:
            state = action.payload;
            localStorage.setItem('user', JSON.stringify(state));
            console.log(state);
            break;
        default:
            break;
    }
    return state;
}
