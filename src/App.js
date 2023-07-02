import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
/* slick-carousel */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Admin from './Pages/AdminPanel/Admin/Admin';
import Cart from './Pages/Cart/Cart';
import Categore from './Pages/Categories/Categore/Categore/Categore';
import Datess from './Pages/Categories/Foods/Datess/Datess/Datess';
import Foods from './Pages/Categories/Foods/Foods/Foods';
import Caps from './Pages/Categories/Islamic/Caps/Caps/Caps';
import Jainamazs from './Pages/Categories/Islamic/Jainamazs/Jainamazs/Jainamazs';
import IslamicCategore from './Pages/Categories/Islamic/lslamicCategories/IslamicCategore';
import Tazbeehs from './Pages/Categories/Islamic/Tazbeehs/Tazbeehs/Tazbeehs';
import Address from './Pages/Dashboards/Address/Address/Address';
import Dashboard from './Pages/Dashboards/Dashboard/Dashboard';
import Profile from './Pages/Dashboards/Profile/Profile';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Logins/Login/Login';
import Register from './Pages/Logins/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import ScrollingBtn from './Pages/Shared/ScrollingBtn/ScrollingBtn';
import Checkout from './Pages/Checkout/Checkout';
import Allorder from './Pages/AdminPanel/AllOrders/Allorder/Allorder';
import BottemHeader from './Pages/Shared/BottemHeader/BottemHeader';
import AllUsers from './Pages/AdminPanel/AllUsers/AllUsers';
import AllAdmins from './Pages/AdminPanel/AllAdmins/AllAdmins';
import RequireAdmin from './Pages/Shared/RequireAuth/RequireAdmin';
import HomeAdmin from './Pages/AdminPanel/HomeAdmin/HomeAdmin';
import AllOrderDetail from './Pages/AdminPanel/AllOrders/AllOrderDetail/AllOrderDetail';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import TermsCondition from './Pages/Terms&Condition/Terms&Condition';
import Orders from './Pages/Dashboards/Orders/Orders/Orders';
import Offers from './Pages/Offers/Offers';
import OrderDetails from './Pages/Dashboards/Orders/OrderDetails/OrderDetails';
import Attars from './Pages/Categories/Islamic/Attars/Attar/Attars';
import AttarDetail from './Pages/Categories/Islamic/Attars/Attar/AttarDetail/AttarDetail';
import AttarComboOffers from './Pages/Categories/Islamic/Attars/ComboOffer/AttarComboOffers/AttarComboOffers';
import CreateProduct from './Pages/AdminPanel/CreateProduct/CreateProduct';
import DeleteProduct from './Pages/AdminPanel/DeleteProduct/DeleteProduct';
import UpdateProducts from './Pages/AdminPanel/UpdateProducts/UpdateProducts/UpdateProducts';
import UpdateProductInfo from './Pages/AdminPanel/UpdateProducts/UpdateProductInfo/UpdateProductInfo';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import AboutUs from './Pages/AboutUs/AboutUs';
import ProductDetails from './Pages/ProductDetails/ProductDetails/ProductDetails';
import AddShippingAddress from './Pages/Dashboards/Address/AddShippingAddress/AddShippingAddress';
import UpdateShippingAddress from './Pages/Dashboards/Address/UpdateShippingAddress/UpdateShippingAddress';
function App() {

  /*   const url = 'http://localhost:5000/attars';
  
    const [CartItem, setCartItem] = useState([]);
  
    const addToCart = (product) => {
      const productExit = CartItem.find((item) => item._id === product._id)
      if (productExit) {
        setCartItem(CartItem.map((item) => (item._id === product._id ? { ...productExit, qty: productExit.qty + 1 } : item)))
      } else {
        setCartItem([...CartItem, { ...product, qty: 1 }])
      }
    }
  
    const decreaseQty = (product) => {
      const productExit = CartItem.find((item) => item.id === product.id)
      if (productExit.qty === 1) {
        setCartItem(CartItem.filter((item) => item.id !== product.id))
      } else {
        setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
      }
    } */

  /* const [products, setProducts] = useState([url]);
  const url = 'http://localhost:5000/attars';
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }
  
  const handleShow = (value) => {
    setShowCart(value)
  } */

  return (
    <div style={{backgroundColor:''}}>
      <ScrollingBtn />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categore' element={<Categore />}>
          <Route path='foods' element={<Foods />} />
          <Route path='foods/datess' element={<Datess />} />
          <Route path='islamic' element={<IslamicCategore />} />
          <Route path='islamic/jainamazs' element={<Jainamazs />} />
          <Route path='islamic/tazbeehs' element={<Tazbeehs />} />
          <Route path='islamic/caps' element={<Caps />} />
          <Route path='islamic/attars/combo_offer' element={<AttarComboOffers />} />
          <Route path='islamic/attars' element={<Attars />} />
          <Route path='products/:productId' element={<ProductDetails />} />
          <Route path='products/:productId' element={<AttarDetail />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register' element={<Register />} />

        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<Profile />} />
          <Route path='address' element={<Address />} />
          <Route path='address/add_shipping_address' element={<AddShippingAddress />} />
         <Route path='address/update_shipping_address/:addressId' element={<UpdateShippingAddress />} /> 
          <Route path='myOrders' element={<Orders />} />
        <Route path='myOrder/:myOrderId' element={<OrderDetails />} /> 
        </Route>

        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>} />

        <Route path='/admin' element={<RequireAdmin><Admin /></RequireAdmin>}>
          <Route index element={<HomeAdmin />} />
          <Route path='allOrder' element={<Allorder />} />
          <Route path='allOrder/:allOrderId' element={<AllOrderDetail />} />
          <Route path='allAdmin' element={<AllAdmins />} />
          <Route path='allUser' element={<RequireAdmin><AllUsers /></RequireAdmin>} />
          <Route path='create_product' element={<CreateProduct />} />
          <Route path='update_product' element={<UpdateProducts />} />
          <Route path='update_product/:productId' element={<UpdateProductInfo />} />
          <Route path='delete_product' element={<DeleteProduct />} />
        </Route>

        <Route path='/offers' element={<Offers />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/privacy_policy' element={<PrivacyPolicy />} />
        <Route path='/terms_condition' element={<TermsCondition />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer/>
      <BottemHeader/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
