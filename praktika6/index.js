import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from '../praktika9/reportWebVitals';
import {FuncElem} from "./FuncElem/FuncElem";
import {ClassElem} from "./ClassElem/ClassElem";

ReactDOM.render(
    <React.StrictMode>
        <FuncElem/>
        <ClassElem/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();