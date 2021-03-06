import {REMOVE_RESIT, SET_RESIT, SET_RESITS, SIGN_OFF_RESIT, SIGN_ON_RESIT} from "./types";
import axios from "axios";
import {CONSTRUCT_URL} from "./init";
import {getUserId} from "../selectors";

export function setResits(resits) {
    return {type: SET_RESITS, payload: resits}
}

export function setResit(resit) {
    return {type: SET_RESIT, payload: resit}
}

export function removeResit(resitId) {
    return {type: REMOVE_RESIT, payload: resitId}
}

export function signOnResit(resitId, user) {
    return {type: SIGN_ON_RESIT, payload: { resitId, user } }
}

export function signOffResit(resitId, user) {
    return {type: SIGN_OFF_RESIT, payload: { resitId, user } }
}

export const getResitsAction = () => async dispatch => {

    try {
        const res = await axios.post(CONSTRUCT_URL('resits/search'), {'GetResits': {}})
        dispatch(setResits(res.data['resits']))
    } catch (e) { console.log(e); }
    // catch(e){
    //     dispatch( {
    //         type: USERS_ERROR,
    //         payload: console.log(e),
    //     })
    // }

}
export const getResit = (id) => async dispatch => {

    try {
        const res = await axios.get(CONSTRUCT_URL(`resits/${id}`))
        dispatch(setResit(res.data['resit']))
    } catch (e) { console.log(e); }

}

export const addResit = (name, startDate, description, onSuccess) => async (dispatch, getState) => {
    // todo add teacher field
     // todo i am passed the state as a
    //  second argument, however it is not an object
    // const currentUserId = getUserId(state);
    const data = {
        "resit": {
            name,
            startDate,
            description,
        }
    }

    try {
        const res = await axios.post(CONSTRUCT_URL(`resits`), data);
        dispatch(setResit(res.data['resit']));
        // todo mb pass smth
        onSuccess();
    } catch (e) { console.log(e); }

}

export const editResit = (slug, name, startDate, description, hasEnded, onSuccess) => async (dispatch, state) => {
    try {
        const res = await axios.put(CONSTRUCT_URL(`resits/${slug}`), {
            "resit": {
                name, startDate, description, hasEnded
            }
        });
        dispatch(setResit(res.data['resit']));
        onSuccess();
    } catch (e) { console.log(e); }

}

export const deleteResit = (id, slug, onSuccess) => async (dispatch) => {
    try {
        await axios.delete(CONSTRUCT_URL(`resits/${slug}`));
        dispatch(removeResit(id));
        onSuccess();
    } catch (e) { console.log(e); }
}

export const signOnResitAction = (id, slug, onSuccess) => async (dispatch, getState) => {
    try {
        await axios.post(CONSTRUCT_URL(`resits/${slug}/sign-on`));
        dispatch(signOnResit(id, getState().user));
        onSuccess();
    } catch (e) { console.log(e); }

}
export const signOffResitAction = (id, slug, onSuccess) => async (dispatch, getState) => {
    try {
        await axios.post(CONSTRUCT_URL(`resits/${slug}/sign-off`));
        dispatch(signOffResit(id, getState().user));
        onSuccess();
    } catch (e) { console.log(e); }

}
