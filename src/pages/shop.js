import React from 'react';
import ProductList from '../containers/ProductList';
import Cart from '../containers/Cart';

const Shop = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Của hàng</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <ProductList />
                </div>
                <div className="col-md-3">
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default Shop;
