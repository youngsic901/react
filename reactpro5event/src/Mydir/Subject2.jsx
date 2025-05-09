function Subject2(props){
    const lists = [];
    const datas = props.friends;
    let i = 0;

    while(i < datas.length) {
        lists.push(<h5 key={i}>번호 {datas[i].bun}번 {datas[i].irum}의 나이는 {datas[i].nai}</h5>);
        i += 1;
    }
    return(
        <div>
            <br/>
            <b>자식 컴포넌트 2</b><br/>
            글 기사 내용 : {props.subtitle}
            <br/>
            {lists}
            <br/>
            <a href="/" onClick={(e) => {
                e.preventDefault();
                props.changeComponent();
            }}>{props.subtitle}</a>
        </div>
    );
}

export default Subject2;