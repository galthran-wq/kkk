export function getResits(state) {
    return state.resits;
}

export function getResit(id) {
    return state => state.resits.length ? state.resits.find(resit => resit.id === id) : null;
}
