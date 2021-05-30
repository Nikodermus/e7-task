import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getJSON } from '../../util/fetch';

export const getProducts = createAsyncThunk('getProducts', async () => {
    const result = await getJSON('products');
    return result;
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: [],
        status: 'loading',
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = action.payload;
            });
    },
});

export const selectProducts = (state) => state.products.value;

export default productsSlice.reducer;
