export const formatMoney = (num) => {
    const formater = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    return formater.format(Number(num));
};
