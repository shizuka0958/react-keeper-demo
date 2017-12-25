import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import Login from '../src/components/Login'
//import {BrowserRouter, HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HashRouter, Route } from 'react-keeper'
ReactDOM.render(
    <HashRouter>
        <div>
            <Route component={Login} path="/login" />    
            <Route index component={App} path="/app" />
        </div>
    </HashRouter>

    , document.getElementById('container')
);

