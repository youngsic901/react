// Redux의 리듀서 함수용 모듈
// 리듀서는 액션에 따라 상태를 변경하는 함수로, 현재 상태(statement)와 action을 받아 새로운 상태를 반환
const initialState = {number : 0}; // 초기 상태 정의

export const numberReducer = (state=initialState, action) => {
    switch(action.type) { // 작업 유형에 따라 분기
        case 'INCRESE_NUMBER':
            return {...state, number:state.number + action.payload}; // action.payload : 액션 객체의 데이터
        default:
            return state;
    }
};

/* 전체 흐름
1) 초기 상태 반환 : 리듀서가 처음 호출되면 state는 initialState가 기본값으로 사용
2) 액션 처리 : action.type을 확인해 해당 로직을 수행
3) 상태 업데이트 : 'INCRESE_NUMBER'가 dispatch되면 state.number가 갱신된 새 상태를 반환
4) 처리되지 않는 액션의 경우 현재 상태를 그대로 반환
*/