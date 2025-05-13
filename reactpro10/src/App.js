import React,{useState, useEffect} from "react";

const App = () =>  {
  const [products, setproducts] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("App 컴포넌트에 대한 componentDidMount");
    // 초기 상품 목록 로딩
    setTimeout(() => {
      setproducts(["Apple", "Banana", "Carrot"]);
      setLoading(false);
    },1000);

    return () => {
      console.log("App 컴포넌트에 대한 componentWillUnmount");
    }
  },[]);

  useEffect(() => {
    if(products.length > 0){
      console.log("componentDidUpdate 발생");
      console.log("products가 갱신됨");
    }
  },[products]);

  const handleChange = (e) => {
    setNewProduct(e.target.value);
  }

  const handleAddProduct = () => {
    if(newProduct.trim() !== "") {
      setproducts((preProducts) => [...preProducts, newProduct]);
      setNewProduct("");
    }
  }

  const handleRemoveProdect = (product) => {
    setproducts((preProducts) => preProducts.filter((p) => p !== product));
  }

  return (
    <div>
      <h1>상품 목록 관리</h1>
      {loading?(<p>상품정보...</p>):(
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product}{" "}
              <button onClick={() => handleRemoveProdect(product)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
      <input type="text" value={newProduct} onChange={handleChange} placeholder="새 상품 입력" />
      <button onClick={handleAddProduct}>상품 추가</button>
    </div>
  );
}

export default App;
