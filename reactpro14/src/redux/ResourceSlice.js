import {createSlice} from '@reduxjs/toolkit';
// createSlice : 리덕스 상태관리의 보일러 플레이트 코드를 줄이고 효율적인 상태관리를 도움
// 리듀서와 액션 생성, 초기상태 정의, 리듀서 함수 관리...

const ResourceSlice = createSlice({
    name:'resource', //  슬라이스 이름
    initialState:{
        value:0, // 공유 자원
    }, //...
    reducers:{ // 상태를 변경하는 함수(리듀서)를 정의. 이전 상태를 새로운 상태로 교체
        // 액션 type의 종류를 생성
        increment:(state) => {
            state.value += 1;   // 상태 직접 변경
        },
        decrement:(state) => {
            state.value -= 1;
        },
        reset:(state) => {
            state.value = 0;
        }
    }
});

// 액션과 리듀서를 내보내기
export const {increment, decrement, reset} = ResourceSlice.actions;
export default ResourceSlice.reducer;