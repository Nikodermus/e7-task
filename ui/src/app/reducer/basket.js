import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { post } from '../../util/fetch';

export const askForPromo = createAsyncThunk(
    'askForPromo',
    async (promoCode) => {
        const result = await post('promocode', { promoCode });
        return result;
    }
);

const initialState = {
    items: {},
    discount: null,
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        clean: (state) => {
            state = initialState;
        },
        add: (state, action) => {
            const item = action.payload;
            const { sku: id } = item;

            // Exists, add 1 with a max of 10
            if (state.items[id]) {
                state.items[id].quantity = Math.min(
                    10,
                    state.items[id].quantity + 1
                );
                // Crete new count with 0
            } else {
                state.items[id] = { ...item, quantity: 1 };
            }
        },
        remove: (state, action) => {
            delete state.items[action.payload];
        },
        changeQuantity: (state, action) => {
            const { quantity, id } = action.payload;

            state.items[id].quantity = quantity;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(askForPromo.fulfilled, (state, action) => {
            state.discount = action.payload;
        });
    },
});

export const { add, remove, changeQuantity, clean } = basketSlice.actions;

export const selectBasket = (state) => state.basket.items;
export const selectBasketDiscount = (state) => state.basket.discount;

export const selectBasketCount = (state) =>
    Object.values(state.basket.items).reduce(
        (acc, item) => item.quantity + acc,
        0
    );

export const selectBasketSubTotal = (state) =>
    Object.values(state.basket.items).reduce(
        (acc, item) => item.price * item.quantity + acc,
        0
    );

export default basketSlice.reducer;
