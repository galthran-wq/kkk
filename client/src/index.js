import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./routes/Home";
import Login from "./routes/Login";
import DialogueEntry from "./routes/DialogueEntry";
import Dialogues from "./routes/Dialogues";
import store from "./store";
import {Provider} from "react-redux";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile";

console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/dialogues" element={<Dialogues />} />
                    <Route path="/dialogues/:dialogueId" element={<DialogueEntry/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/profile" element={<Profile/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
