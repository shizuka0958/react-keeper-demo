import React from 'react';
import ReactDOM from 'react-dom';
import { Control } from 'react-keeper'

class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h3>login</h3>
                <button onClick={()=>{Control.go('/app/user')}}>login</button>
            </div>
        );
    }
}

export default Login;