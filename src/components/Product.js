import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {
    constructor() {
        super();
        console.log('---constructor Product---');
    }

    render() {
        return (
            <div>
                <p>Product view</p>
            </div>
        );
    }
}

export default Product;