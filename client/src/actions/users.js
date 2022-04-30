import axios from "axios";
import {SET_USER} from "./types";
import {CONSTRUCT_URL} from "./init";

export function setUser(user) {
    return {type: SET_USER, payload: user}
}

export const register = (email, name, password, isTeacher, onSuccess) => async dispatch => {
    const data = {
        "user": {
            email,
            username: name,
            password,
            isTeacher
        }
    }
    try {
        const res = await axios.post(CONSTRUCT_URL('users'), data)
        dispatch(setUser(res.data["user"]))
        onSuccess();
    } catch (e) { console.log(e); }
}

export const login = (email, password, onSuccess) => async dispatch => {
    const data = {
        "user": {
            email,
            password,
        }
    }
    try {
        const res = await axios.post(CONSTRUCT_URL('users/login'), data);
        dispatch(setUser(res.data["user"]));
        onSuccess();
    } catch (e) { console.log(e); }
}
