import {configureStore} from '@reduxjs/toolkit';
// import { numberReducer } from './reducer'; // 액션을 기반으로 상태를 갱신하는 로직을 포함
import ResourceSlice from './ResourceSlice';

const Store = configureStore({ // 리덕스 상태를 갱신하기 위한 리듀서를 등록
    reducer:{
        resource:ResourceSlice, // 각 리듀서를 객체 형태로 나열
        // ...
    },
});

export default Store;