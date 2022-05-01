import {SET_RESIT, SET_RESITS} from "./types";
import axios from "axios";
import {CONSTRUCT_URL} from "./init";

export function setResits(dialogues) {
    return {type: SET_RESITS, payload: dialogues}
}

export function setResit(dialogue) {
    return {type: SET_RESIT, payload: dialogue}
}

export const getResitsAction = () => async dispatch => {

    try {
        const res = await axios.get(CONSTRUCT_URL('resits'))
        dispatch(setResits(res.data))
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
        dispatch(setResit(res.data))
    } catch (e) { console.log(e); }

}

export const addResit = (name, startDate, description, onSuccess) => async (dispatch, state) => {
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

export const editResit = (id, name, content, onSuccess) => async (dispatch, state) => {
    // todo add teacher field
     // todo i am passed the state as a
    //  second argument, however it is not an object
    // const currentUserId = getUserId(state);

    try {
        const res = await axios.patch(CONSTRUCT_URL(`resits`), {
            name, content
        });
        dispatch(setResit(res.data));
        // todo mb pass smth
        onSuccess();
    } catch (e) { console.log(e); }

}
