import { connect } from 'react-redux';
import { getCategories } from '../ducks/categories';
import CategoryList from '../components/CategoryList';

const mapStateToProps = (state, props) => {
    return {
        categories: getCategories(state, props)
    }
}

export default connect(mapStateToProps)(CategoryList);
