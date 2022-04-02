export function getDialogues(state) {
    return state.dialogues;
}

export function getDialogue(id) {
    return state => state.dialogues ? state.dialogues.find(dialogue => dialogue.id === id) : null;
}
