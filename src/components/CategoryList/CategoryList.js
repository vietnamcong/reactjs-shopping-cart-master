import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CategoryList extends Component {

    handleClick = (id) => {
        const { getProductByCategory } = this.props;

    }

    render() {
        const { categories } = this.props;

        return (
            <div className='category-list'>
                <ul>
                {categories.map(category => (
                    <li 
                        onClick={this.handleClick(category.id)}
                        key={category.id} 
                        className="category-list__item">
                        { category.name }
                    </li>
                ))}
                </ul>
            </div>
        );
    }
    
}

export default CategoryList;
