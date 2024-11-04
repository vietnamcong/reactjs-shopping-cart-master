import { connect } from 'react-redux';
import SingleProduct from '../components/SingleProduct';
import { addToCart, removeFromCart, isInCart } from '../ducks/cart';
import { getProduct } from '../ducks/products';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props),
        product: getProduct(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
