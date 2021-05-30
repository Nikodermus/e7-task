import { useEffect, useState } from 'react';
import { isValidCCNumber } from '../util/basket';

const CreditCardBox = ({ setCard }) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        const cleanValue = Number(value.replace(/\D/g, ''));

        setCard({
            valid: isValidCCNumber(cleanValue),
            number: cleanValue,
        });
    }, [value, setCard]);

    return (
        <section>
            <form action="">
                <label htmlFor="cc">Please enter your credit card number</label>
                <input
                    id="cc"
                    name="credit-card"
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    value={value}
                />
            </form>
        </section>
    );
};

export default CreditCardBox;
