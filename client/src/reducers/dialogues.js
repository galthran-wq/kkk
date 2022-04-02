import {SET_DIALOGUES, SET_DIALOGUE} from "../actions/types";

export default function dialogueReducer(state = [], action) {
    switch (action.type) {
        case SET_DIALOGUE:
            // problem that it doesn't update
            const newDialogue = action.payload;
            if (newDialogue) {
                if (state) {
                    const dialogueIndex = state.findIndex(dialogue => dialogue.id === newDialogue.id);
                    if (dialogueIndex !== -1) {
                        state.splice(dialogueIndex, 1);
                    }

                }
                state = [...state, newDialogue];
                console.log(state);
            }
            console.log(state, newDialogue);
            break;
        case SET_DIALOGUES:
            if (action.payload) {
                state = action.payload;
                return state;
            }
            break;
        default:
            break;
    }
    return state;
}
