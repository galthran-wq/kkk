import axios from "axios";
import {getUserToken, isUserAuthenticated} from "../selectors";
import {useSelector} from "react-redux";
import store from "../store";
import {removeUser} from "./users";

export const BASE_URL = `http://localhost:8080/api`;
export const CONSTRUCT_URL = (route) => `${BASE_URL}/${route}/`;


// Todo: we would also had to handle token refreshs
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = getUserToken(store.getState());
    if (token) config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  }, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(response => response, error => {
    console.log(error, isUserAuthenticated(store.getState()))
    if (error.response.status === 401 && isUserAuthenticated(store.getState())) {
        store.dispatch(removeUser())
    }
    return Promise.reject(error)
})