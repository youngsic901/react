
// function MyName2(props){
//     console.log(props, ' ', props.name, '' , props.addr);
//     return(
//         <div>
//             안녕하세요 {props.name} 입니다.
//         </div>
//     );
// }

// const MyName2 = ({name='공기밥', addr='서울 거기'}) => {
//     console.log(name, ' ', addr);
//     return (
//         <div>
//             안녕하세요 {name}입니다. {addr}에 살아요
//         </div>
//     );
// }

// function MyName2(props) {
//     const name = props.name || '초기이름';
//     const addr = props.addr || '초기주소';
//     console.log(props, ' ', name, '' , addr);
//     return (
//         <div>
//             안녕하세요 {name}입니다. {addr}에 살아요
//         </div>
//     );
// }

const MyName2 = (props) => {
    const name = props.name || '초기이름';
    const addr = props.addr || '초기주소';
    console.log(props, ' ', name, '' , addr);
    return (
        <div>
            안녕하세요 {name}입니다. {addr}에 살아요
        </div>
    );
}

export default MyName2;