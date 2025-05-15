// 자식 컴포넌트 ChildA, ChildB를  포함하고 Redux의 상태(state)를 공유하기

import React from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function Parent() {
    return(
        <div>
            <h2>Child의 부모 컴포넌트</h2>
            <ChildA />
            <ChildB />
        </div>
    );
}

export default Parent;