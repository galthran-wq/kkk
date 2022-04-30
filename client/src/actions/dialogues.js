import {SET_DIALOGUE, SET_DIALOGUES} from "./types";
import axios from "axios";
import {CONSTRUCT_URL} from "./init";
import getUserId from "../selectors";
import {useSelector} from "react-redux";

const config = {
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  // }
};

export function setDialogues(dialogues) {
    return {type: SET_DIALOGUES, payload: dialogues}
}

export function setDialogue(dialogue) {
    return {type: SET_DIALOGUE, payload: dialogue}
}

export const getDialoguesAction = () => async dispatch => {

    try {
        const res = await axios.get(CONSTRUCT_URL('dialogues'), config)
        dispatch(setDialogues(res.data))
    } catch (e) { console.log(e); }
    // catch(e){
    //     dispatch( {
    //         type: USERS_ERROR,
    //         payload: console.log(e),
    //     })
    // }

}
export const getDialogue = (id) => async dispatch => {

    try {
        const res = await axios.get(CONSTRUCT_URL(`dialogues/${id}`), config)
        dispatch(setDialogue(res.data))
    } catch (e) { console.log(e); }

}

export const addDialogue = (name, content, onSuccess) => async (dispatch, state) => {
    // todo add teacher field
     // todo i am passed the state as a
    //  second argument, however it is not an object
    // const currentUserId = getUserId(state);

    try {
        const res = await axios.post(CONSTRUCT_URL(`dialogues`), {
            name, content
        }, config);
        dispatch(setDialogue(res.data));
        // todo mb pass smth
        onSuccess();
    } catch (e) { console.log(e); }

}

export const editDialogue = (id, name, content, onSuccess) => async (dispatch, state) => {
    // todo add teacher field
     // todo i am passed the state as a
    //  second argument, however it is not an object
    // const currentUserId = getUserId(state);

    try {
        const res = await axios.patch(CONSTRUCT_URL(`dialogues`), {
            name, content
        }, config);
        dispatch(setDialogue(res.data));
        // todo mb pass smth
        onSuccess();
    } catch (e) { console.log(e); }

}
