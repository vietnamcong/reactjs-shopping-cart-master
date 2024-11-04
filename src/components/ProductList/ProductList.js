import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3>Sản phẩm</h3>
            <div className="product-list">
              {products.map(product => (
                  <div key={product.id} className="product-list__item">
                    <Product {...product} />
                  </div>
              ))}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
