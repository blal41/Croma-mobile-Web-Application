import './App.css';
import Layout from './Component/Header/Layout';
import Mainfile from './Component/Home/Mainfile';
import {Route ,Routes} from 'react-router-dom';
import Product from './Component/Product/Product';
import Shopnow from './Component/Product/Shopnow';
import Cart from './Component/Cart/Cart';
import AuthForm from './Component/Auth/AuthForm';
import AboutCroma from './Component/Footer/AboutCroma';
import Faqs from './Component/Footer/Faqs';
import PrivacyPolicy from './Component/Footer/PrivacyPolicy';
import TermsandConditions from './Component/Footer/TermsandConditions';
import Security from './Component/Footer/Security';
import Desclaimer from './Component/Footer/Desclaimer';
import CheckoutForm from './Component/Auth/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
        <Route path = '/' element = {<Mainfile />} />
        <Route path = '/product' element = {<Product />} />
        <Route path=  '/product/shopnow' element ={<Shopnow/>} />
        <Route path=  '/cart' element ={<Cart/>} />
        <Route path = '/login' element={<AuthForm />} />
        <Route path = '/aboutus' element={<AboutCroma />} />
        <Route path = '/faqs' element={<Faqs />} />
        <Route path = '/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path = '/term-condition' element={<TermsandConditions/>} />
        <Route path = '/security' element={<Security/>} />
        <Route path = '/desclaimer' element={<Desclaimer/>} />
        <Route path = '/checkout' element={<CheckoutForm/>} />
        <Route path = '*' element={<Mainfile />}></Route>
        
       
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
