import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Reducer';


const store = configureStore({
    reducer:cartReducer,
});

export default store;