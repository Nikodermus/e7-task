import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProducts, selectProducts } from '../app/reducer/products';
import ProductItem from '../components/ProductItem';

const Products = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <main>
            <ul>
                {products.map((p) => (
                    <ProductItem product={p} key={p.sku} />
                ))}
            </ul>

            <Link to="/checkout">Proceed to checkout</Link>
        </main>
    );
};

export default Products;
