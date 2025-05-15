import ProductList from './mydir/ProductList';
import Cart from './mydir/Cart';
import CartSummary from './mydir/CartSummary';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>장바구니 구현</h1>
        <br/>
        <nav>
          <Link to="/item">상품목록</Link> | &nbsp;
          <Link to="/cart">장바구니</Link>
        </nav>
        <Routes>
          <Route path="/item" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <CartSummary />
      </div>
    </Router>
  );
}

export default App;
