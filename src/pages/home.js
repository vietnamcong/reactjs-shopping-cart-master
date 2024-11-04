import React from 'react';
import ProductList from '../containers/ProductList';
import CategoryList from '../containers/CategoryList';

const Home = () => {
    return (
        <div>
            <div className="container-fluid bg-1 text-center">
                <img src="/images/slide/slide-1.jpg" className="img-responsive" alt="Bird" />
            </div>
            <div>
                <CategoryList />
            </div>
            <div className="container bg-3 text-center">    
                <div className="row">
                    <ProductList />
                </div>
            </div>
        </div>
    );
}

export default Home;
