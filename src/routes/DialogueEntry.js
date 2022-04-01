import { useParams } from "react-router-dom";
import {getDialogues} from "../data/storage";

export default function DialogueEntry() {
    const dialogues = getDialogues();
    const currentDialogueId = useParams().dialogueId;
    const currentDialogue = dialogues.find(dialogue => dialogue.id == currentDialogueId);
    return (
        <div>
            <div>{currentDialogue.name}</div>
            <div>{currentDialogue.content}</div>
        </div>
    )
}