export const formatPurchase = (items, cardNumber) => ({
    cardNumber: String(cardNumber),
    basket: items.map(({ sku, quantity }) => ({ sku, quantity })),
});

const sum = (array) => array.reduce((acc, number) => acc + Number(number), 0);

export const isValidCCNumber = (number) => {
    const reverse = String(number).split('').reverse();

    const oddPositions = reverse.filter((_, index) => index % 2 === 0);
    const s1 = sum(oddPositions);

    const evenPositions = reverse.filter((_, index) => index % 2 !== 0);
    const twiceEven = evenPositions.map((n) => n * 2);
    const sumDigitsEvent = twiceEven.map((n) => {
        const parts = String(n).split('');
        const total = sum(parts);
        return total;
    });
    const s2 = sum(sumDigitsEvent);

    const magicNumber = s1 + s2;
    return String(magicNumber).endsWith('0');
};
