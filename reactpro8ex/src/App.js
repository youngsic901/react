import React, {useState} from "react";

function SangpumList({itemProps}){
  let totalPrice = 0;
  itemProps.forEach(item => {
    totalPrice += item.price;
  });
  return(
    <div>
      <table border='1'>
        <thead>
          <tr>
            <th>코드</th><th>상품명</th><th>가격</th>
          </tr>
        </thead>
        <tbody>
        {itemProps.map((item) => (
          <tr key={item.id}>
            <td>{item.code}</td><td>{item.name}</td><td>{item.price}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <div>건수 : {itemProps.length} 가격총합 : {totalPrice} 평균 : {!isNaN((totalPrice / itemProps.length)) ? (totalPrice / itemProps.length).toFixed(1) : ''}</div>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([]);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [deleteCode, setDelete] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target

    if(name === 'code') setCode(value);
    else if(name === 'name') setName(value);
    else if(name === 'price') setPrice(value);
    else return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(code.length === 0 || name.length === 0 || price.length === 0) {
      return;
    }

    const newItem = {
      code:code,
      name:name,
      price:Number(price),
      id:Date.now()
    }

    setItems((prevItems) => [...prevItems, newItem]);
    setCode('');
    setName('');
    setPrice('');
  }

  const handleDelete = () => {
    // filter 조건식으로 prevItems에 들어갈 아이템 제한
    setItems((prevItems) => prevItems.filter(item => item.code !== deleteCode));
    setDelete('');
  }
  return (
    <div>
      <form id="frm" onSubmit={handleSubmit}>
        <label htmlFor="new-code">코드 : </label>
        <input id="new-code" name="code" value={code} onChange={handleChange}/><br/>
        <label htmlFor="new-name">상품명 : </label>
        <input id="new-name" name="name" value={name} onChange={handleChange}/><br/>
        <label htmlFor="new-price">가격 : </label>
        <input id="new-price" name="price" type="number" value={price} onChange={handleChange}/><br/>
        <button>등록</button>
      </form>
      <label htmlFor="new-delete">삭제할 코드 : </label>
      <input id="new-delete" onChange={(e) => setDelete(e.target.value)}></input> 
      <button onClick={handleDelete}>삭제</button>
      <br/>
      <SangpumList itemProps={items} />
    </div>
  );
}

export default App;
