import React from 'react';
import ProductList from '../containers/ProductList';
import SingleProduct from '../containers/SingleProduct';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    return (
        <div>
            <div className="container-fluid bg-1 text-center">
                <img src="/images/slide/slide-1.jpg" className="img-responsive" alt="Bird" />
            </div>
            <div className="container">
                <SingleProduct id={useParams().id} />
                <div className="row">
                    <div className="col-12 col-md-8">
                    
                    </div>
                    <div className="col-12 col-md-4">
                    
                    </div>
                </div>
            </div>
            <div className="container bg-3 text-center">    
                <div className="row">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
