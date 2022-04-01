export function getDialogues(state) {
    console.log(12123123);
    return state.dialogues;
}

export function getDialogue(id) {
    return state => state.dialogues ? state.dialogues.find(dialogue => dialogue.id === id) : null;
}
