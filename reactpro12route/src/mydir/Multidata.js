import React from "react";

const MemberComp = ({memberData}) => {
    return(
        <tr>
            <td>{memberData.irum}</td>
            <td>{memberData.junhwa}</td>
        </tr>
    );
}

const MultiData =() => {
    const members = [
        {irum:"사오정", junhwa:"111-1111"},
        {irum:"삼장법사", junhwa:"111-2222"},
        {irum:"손오공", junhwa:"111-3333"},
    ];

    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>이름</th><th>전화</th>
                </tr>
            </thead>
            <tbody>
                {members.map((mem, index) => (
                    <MemberComp key={index} memberData={mem}/>
                ))}
            </tbody>
        </table>
    );
};

export default MultiData;