import {SET_USER} from "../actions/types";

export default function usersReducer(state = [], action) {
    switch (action.type) {
        case SET_USER:
            // const newDialogue = action.payload;
            // if (newDialogue) {
            //     if (state) {
            //         const dialogueIndex = state.findIndex(dialogue => dialogue.id === newDialogue.id);
            //         if (dialogueIndex !== -1) {
            //             state.splice(dialogueIndex, 1);
            //         }
            //
            //     }
            //     state = [...state, newDialogue];
            //     console.log(state);
            // }
            // console.log(state, newDialogue);
            state = action.payload;
            console.log(state);
            break;
        default:
            break;
    }
    return state;
}
