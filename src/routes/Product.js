import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
    function handleDelete(id) {
        dispatch({
            type: 'products/delete',
            payload: id
        });
    }
    return (
        <div>
            <h2>List of Products</h2>
            <ProductList onDelete={handleDelete} products={products} />
        </div>
    );
};

const mapStateToProductsProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProductsProps)(Products);