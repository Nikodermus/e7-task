import { selectBasketCount } from '../app/reducer/basket';
import { useSelector } from 'react-redux';

const BasketCount = () => {
    const count = useSelector(selectBasketCount);

    return (
        <div>
            <p>Basket</p>
            <span>{count}</span>
        </div>
    );
};

export default BasketCount;
