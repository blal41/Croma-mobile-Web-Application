import './App.css';
import Layout from './Component/Header/Layout';
import Mainfile from './Component/Home/Mainfile';
import {Route ,Routes} from 'react-router-dom';
import Product from './Component/Product/Product';
import Shopnow from './Component/Product/Shopnow';
import Cart from './Component/Cart/Cart';
function App() {
  return (
    <div>
      <Layout>
        <Routes>
        <Route path = '/' element = {<Mainfile />} />
        <Route path = '/product' element = {<Product />} />
        <Route path=  '/product/shopnow' element ={<Shopnow/>} />
        <Route path=  '/cart' element ={<Cart/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
