import axios from "axios";
import {getUserToken} from "../selectors";
import {useSelector} from "react-redux";
import store from "../store";

export const BASE_URL = `http://localhost:8080/api`;
export const CONSTRUCT_URL = (route) => `${BASE_URL}/${route}/`;


// Todo: we would also had to handle token refreshs
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = getUserToken(store.getState());
    if (token) config.headers['Authorization'] = `Bearer ${getUserToken(store.getState())}`;

    return config;
  }, error => {
    Promise.reject(error)
});