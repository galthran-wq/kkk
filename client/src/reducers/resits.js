import {SET_RESITS, SET_RESIT} from "../actions/types";

export default function resitsReducer(state = [], action) {
    switch (action.type) {
        case SET_RESIT:
            // problem that it doesn't update
            const newResit = action.payload;
            if (newResit) {
                if (state) {
                    const resitIndex = state.findIndex(resit => resit.id === newResit.id);
                    if (resitIndex !== -1) {
                        state.splice(resitIndex, 1);
                    }

                }
                state = [...state, newResit];
                console.log(state);
            }
            console.log(state, newResit);
            break;
        case SET_RESITS:
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
