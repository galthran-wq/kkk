import { useParams } from "react-router-dom";
import {getResit} from "../actions/resits";

export default function ResitEntry() {
    const currentResitId = useParams().resitId;
    const currentResit = getResit(currentResitId);
    return (
        <div>
            <div>{currentResit.name}</div>
            <div>{currentResit.content}</div>
        </div>
    )
}