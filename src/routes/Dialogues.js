import {Link} from "react-router-dom";
import {getDialogues} from '../data/storage';

export default function Dialogues() {
    const dialogues = getDialogues();

    let dialogueEntriesLinks = [];
    for (let i = 0; i < dialogues.length; i++) {
        dialogueEntriesLinks.push(
            // todo dialogue link component
            <Link key={i} to={`/dialogues/${dialogues[i].id}`}>
                {dialogues[i].name}
            </Link>
        )
    }
    return(
        <div>
            {dialogueEntriesLinks}
        </div>
    )
}