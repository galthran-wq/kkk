export function getUserId(state) {
    return state.user.id;
}

export function getUsername(state) {
    return state.user.username;
}

export function isUserAuthenticated(state) {
    return state.user.token !== null;
}

export function getUserToken(state) {
    return state.user.token;
}
