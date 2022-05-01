import {SET_RESITS, SET_RESIT, REMOVE_RESIT} from "../actions/types";

function removeResitWithId(state, resitId) {
    const resitIndex = state.findIndex(resit => resit.id === resitId);
    if (resitIndex !== -1) {
        state.splice(resitIndex, 1);
    }
}

const concatDate = date => {
    if (date && date.indexOf('@') !== -1)
        return date.slice(0, date.indexOf('@'));
    else
        return date
}

export default function resitsReducer(state = [], action) {
    switch (action.type) {
        case SET_RESIT:
            const newResit = action.payload;
            if (newResit) {
                removeResitWithId(state, newResit.id);
                newResit.startDate = concatDate(newResit.startDate);
                state = [...state, newResit];
            }
            break;
        case SET_RESITS:
            if (action.payload)
                state = action.payload;
            state.forEach(resit => resit.startDate = concatDate(resit.startDate))
            break;
        case REMOVE_RESIT:
            const resitId = action.payload;
            removeResitWithId(state, resitId);
            break;
        default:
            break;
    }
    return state;
}
