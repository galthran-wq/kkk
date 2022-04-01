import {SET_DIALOGUE, SET_DIALOGUES} from "./types";
import axios from "axios";

export function setDialogues(dialogues) {
    return {type: SET_DIALOGUES, payload: dialogues}
}

export function setDialogue(dialogue) {
    return {type: SET_DIALOGUE, payload: dialogue}
}

export const getDialoguesAction = () => async dispatch => {

    try {
        const res = await axios.get(`http://localhost:3003/dialogues`)
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
        const res = await axios.get(`http://localhost:3003/dialogues/` + id)
        dispatch(setDialogue(res.data))
    } catch (e) { console.log(e); }

}
