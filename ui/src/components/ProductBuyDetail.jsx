import { useDispatch } from 'react-redux';
import { formatMoney } from '../util/money';
import Button from './Button';
import { remove, changeQuantity } from '../app/reducer/basket';

const ProductBuyDetail = ({ product }) => {
    const { name, price, quantity, sku } = product;
    const dispatch = useDispatch();

    return (
        <li>
            <p>{name}</p>
            <select
                name="quantity"
                value={quantity}
                onChange={(e) =>
                    dispatch(
                        changeQuantity({
                            id: sku,
                            quantity: Number(e.target.value),
                        })
                    )
                }
            >
                {Array.from({ length: 9 }).map((_, index) => (
                    <option value={index + 1}>{index + 1}</option>
                ))}
            </select>

            <span>{formatMoney(Number(price) * quantity)}</span>
            <Button onClick={() => dispatch(remove(sku))}>Remove</Button>
        </li>
    );
};

export default ProductBuyDetail;
