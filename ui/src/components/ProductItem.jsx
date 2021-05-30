import { useDispatch } from 'react-redux';
import { add } from '../app/reducer/basket';

import { formatMoney } from '../util/money';
import Button from './Button';

const ProductItem = ({ product }) => {
    const { description, name, price } = product;
    const dispatch = useDispatch();

    return (
        <li>
            <h3>{name}</h3>
            <p>{description}</p>
            <span>{formatMoney(price)}</span>
            <Button onClick={() => dispatch(add(product))}>Add to cart</Button>
        </li>
    );
};

export default ProductItem;
