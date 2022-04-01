import { useParams } from "react-router-dom";
import {getDialogue} from "../actions/dialogues";

export default function DialogueEntry() {
    const currentDialogueId = useParams().dialogueId;
    const currentDialogue = getDialogue(currentDialogueId);
    return (
        <div>
            <div>{currentDialogue.name}</div>
            <div>{currentDialogue.content}</div>
        </div>
    )
}