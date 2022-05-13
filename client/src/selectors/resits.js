export function getResits(state) {
    console.log("in get resits", state)
    return state.resits;
}

export function getResit(id) {
    return state => state.resits.length ? state.resits.find(resit => resit.id === id) : null;
}
