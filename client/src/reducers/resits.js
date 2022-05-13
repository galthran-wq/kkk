import {SET_RESITS, SET_RESIT, REMOVE_RESIT, SIGN_ON_RESIT, SIGN_OFF_RESIT} from "../actions/types";

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
    let resitId, user;
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
            resitId = action.payload;
            removeResitWithId(state, resitId);
            break;
        case SIGN_ON_RESIT:
            ({ resitId, user } = action.payload);
            state.find(resit => resit.id === resitId).participants.push(user);
            // todo it doesn't seem to propogate update otherwise
            state = [...state];
            console.log(state);
            break;
        case SIGN_OFF_RESIT:
            ({ resitId, user } = action.payload);
            const resit = state.find(resit => resit.id === resitId);
            resit.participants = resit.participants.filter(participant => participant.username !== user.username);
            state = [...state];
            break;
        default:
            break;
    }
    return state;
}
