import { combineReducers } from '@reduxjs/toolkit';
import productSlice from './components/reducers/productSlice';

const rootReducer = combineReducers({
  products: productSlice,
});

export default rootReducer;
