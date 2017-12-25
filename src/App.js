import React, { Component } from 'react';
import User from './components/User';
import Product from './components/Product';

//import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Route ,Link} from 'react-keeper'

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1> 这是主页面 </h1>
                <ul>
                    <li><Link to="/app/user">user link</Link></li>
                    <li><Link to="/app/product">product link</Link></li>
                </ul>
                <div>
                        <Route index path="/user" component={User} />
                        <Route cache path="/product" component={Product} />
                </div>
            </div>
        );
    }
}

export default App;
