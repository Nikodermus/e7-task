import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { askForPromo } from '../app/reducer/basket';

import Button from './Button';

const PromoCode = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const askForCode = (e) => {
        e.preventDefault();
        dispatch(askForPromo(value.toLocaleUpperCase().trim()));
    };

    return (
        <section>
            <form onSubmit={askForCode}>
                <label htmlFor="promocode">Enter promo code</label>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    name="promocode"
                    id="promocode"
                />
                <Button type="submit">Apply</Button>
            </form>
        </section>
    );
};

export default PromoCode;
