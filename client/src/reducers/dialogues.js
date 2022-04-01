import {SET_DIALOGUES, SET_DIALOGUE} from "../actions/types";

export default function dialogueReducer(state = [], action) {
    switch (action.type) {
        case SET_DIALOGUE:
            const newDialogue = action.payload;
            if (action.type === SET_DIALOGUE && newDialogue) {
                if (state.dialogues) {
                    const dialogueIndex = state.dialogues.findIndex(dialogue => dialogue.id === newDialogue.id);
                    if (dialogueIndex !== -1) {
                        state.dialogues[dialogueIndex] = newDialogue;
                    } else {
                        state.dialogues.push(newDialogue);
                    }
                } else {
                    state.dialogues = [newDialogue];
                }
            }
            break;
        case SET_DIALOGUES:
            if (action.payload) {
                state.push(...action.payload)
                return state;
            }
            break;
        default:
            break;
    }
    return state;
}
