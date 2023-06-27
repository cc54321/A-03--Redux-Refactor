import { createSlice } from '@reduxjs/toolkit';
import mockData from '../data/mockData';

const productSlice = createSlice({
  name: 'products',
  initialState: mockData,
  reducers: {
    deleteProduct(state, action) {
      const productId = action.payload;
      return state.filter(product => product.id !== productId);
    },
    editProduct(state, action) {
      const updatedProduct = action.payload;
      return state.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
    },
    addProduct(state, action) {
      const newProduct = action.payload;
      return [...state, newProduct];
    },
  },
});

export const { deleteProduct, editProduct, addProduct } = productSlice.actions;
export default productSlice.reducer;


