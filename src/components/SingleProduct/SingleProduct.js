import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';


function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class SingleProduct extends Component {
    
    render() {
        
        const { isInCart ,product } = this.props;
        const { name, price, currency, image } = product; 
        return (
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">{price} {currency}</div>
                </div>
            </div>
        );
    }
}

SingleProduct.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default withParams(SingleProduct);