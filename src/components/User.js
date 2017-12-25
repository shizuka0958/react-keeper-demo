import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component {
    constructor() {
        super();
        console.log('---constructor User---');
    }

    render() {
        return (
            <div>
                <p>user view</p>
            </div>
        );
    }
}

export default User;