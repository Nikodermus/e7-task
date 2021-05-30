import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
    selectBasket,
    selectBasketDiscount,
    selectBasketSubTotal,
    clean,
} from '../app/reducer/basket';
import Button from '../components/Button';
import CreditCardBox from '../components/CreditCardBox';
import ProductBuyDetail from '../components/ProductBuyDetail';
import PromoCode from '../components/PromoCode';
import { formatPurchase } from '../util/basket';
import { post } from '../util/fetch';
import { formatMoney } from '../util/money';

const Checkout = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const items = Object.values(useSelector(selectBasket));
    const subtotal = useSelector(selectBasketSubTotal);
    const discountRaw = useSelector(selectBasketDiscount);

    const [card, setCard] = useState({ valid: false, number: null });
    const discountQuantity = (discountRaw?.amount * subtotal) / 100 || 0;

    const doPurchase = useCallback(async () => {
        let success = false;

        try {
            await post('checkout', formatPurchase(items, card.number));

            dispatch(clean());
            success = true;
        } catch (error) {}

        history.push('/post-checkout', { success });
    }, [items, card.number, history, dispatch]);

    return (
        <>
            <Link to="/">Continue Shopping</Link>

            <main>
                <section>
                    <ul>
                        {items.map((i) => (
                            <ProductBuyDetail product={i} />
                        ))}
                    </ul>
                </section>

                <PromoCode></PromoCode>

                <section>
                    <article>
                        <h3>SubTotal</h3>
                        <span>{formatMoney(subtotal)}</span>
                    </article>

                    {discountQuantity && (
                        <article>
                            <h3>Discount</h3>
                            <span>
                                -{formatMoney(discountQuantity)} (
                                {discountRaw.amount}%)
                            </span>
                        </article>
                    )}

                    <article>
                        <h3>Total</h3>
                        <span>{formatMoney(subtotal - discountQuantity)}</span>
                    </article>
                </section>

                <CreditCardBox setCard={setCard}></CreditCardBox>

                <Button
                    disabled={!items.length || !card.valid}
                    onClick={doPurchase}
                >
                    Checkout
                </Button>
            </main>
        </>
    );
};

export default Checkout;
