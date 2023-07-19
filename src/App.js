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
import CreateProduct from './Pages/AdminPanel/CreateProduct/CreateProduct';
import DeleteProduct from './Pages/AdminPanel/DeleteProduct/DeleteProduct';
import UpdateProducts from './Pages/AdminPanel/UpdateProducts/UpdateProducts/UpdateProducts';
import UpdateProductInfo from './Pages/AdminPanel/UpdateProducts/UpdateProductInfo/UpdateProductInfo';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import AboutUs from './Pages/AboutUs/AboutUs';
import ProductDetails from './Pages/ProductDetails/ProductDetails/ProductDetails';
import AddShippingAddress from './Pages/Dashboards/Address/AddShippingAddress/AddShippingAddress';
import UpdateShippingAddress from './Pages/Dashboards/Address/UpdateShippingAddress/UpdateShippingAddress';
import Tupis from './Pages/Categories/Islamic/Tupis/Tupis/Tupis';
import SportsCategories from './Pages/Categories/Sports/SportsCategories/SportsCategories';
import FoodsCategories from './Pages/Categories/Foods/FoodsCategories/FoodsCategories';
import ElectronicsCategories from './Pages/Categories/Electronices/ElectronicsCategories/ElectronicsCategories';
import DressesCategories from './Pages/Categories/Dresses/DressesCategories/DressesCategories';
import ComputersCategories from './Pages/Categories/Computers/ComputersCategories/ComputersCategories';
import BeautyCategories from './Pages/Categories/Beauty/BeautyCategories/BeautyCategories';
import BagsCategories from './Pages/Categories/Bags/BagsCategories/BagsCategories';
import Attars from './Pages/Categories/Islamic/Attars/Attars/Attars';
import AttarComboOffers from './Pages/Categories/Islamic/Attars/AttarsComboOffer/AttarComboOffers/AttarComboOffers';
import PopularAttars from './Pages/Categories/Islamic/Attars/PopularAttars/PopularAttars/PopularAttars';
import AlifAttars from './Pages/Categories/Islamic/Attars/AlifAttars/AlifAttars/AlifAttars';
import Messwalks from './Pages/Categories/Islamic/Messwalks/Messwalks/Messwalks';
import SearchBerResult from './Pages/Shared/Header/SearchBerResult/SearchBerResult';
import AppContext from './Context/AppContext';


function App() {

  return (
    <AppContext>
      <div>
        <ScrollingBtn />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categore' element={<Categore />}>
            {/* ------------------- start search ber ---------------------- */}
            <Route path='search' element={<SearchBerResult />} />
            {/* ------------------- End search ber ---------------------- */}

            {/*--------------------- start Beauty  categories ---------------------- */}
            <Route path='beautyes' element={<BeautyCategories />} />
            {/*--------------------- end Beauty  categories ---------------------- */}

            {/*--------------------- start Bags  categories ---------------------- */}
            <Route path='bags' element={<BagsCategories />} />
            {/*--------------------- end bags  categories ---------------------- */}

            {/*--------------------- start computers  categories ---------------------- */}
            <Route path='computers' element={<ComputersCategories />} />
            {/*--------------------- end computers  categories ---------------------- */}

            {/*--------------------- start dresses categories ---------------------- */}
            <Route path='dresses' element={<DressesCategories />} />
            {/*--------------------- end dresses  categories ---------------------- */}

            {/*--------------------- start electronics categories ---------------------- */}
            <Route path='electronics' element={<ElectronicsCategories />} />
            {/*--------------------- end electronics  categories ---------------------- */}

            {/*--------------------- start foods categories ---------------------- */}
            <Route path='foods' element={<FoodsCategories />} />
            {/*--------------------- end foods categories ---------------------- */}

            {/*--------------------- start Beauty  categories ---------------------- */}
            <Route path='islamic' element={<IslamicCategore />} />
            <Route path='islamic/jainamazs' element={<Jainamazs />} />
            <Route path='islamic/tasbeehs' element={<Tazbeehs />} />
            <Route path='islamic/tupis' element={<Tupis />} />
            <Route path='islamic/miswaks' element={<Messwalks />} />
            <Route path='islamic/attars' element={<Attars />} />
            <Route path='islamic/attars/combo_offer' element={<AttarComboOffers />} />
            <Route path='islamic/attars/popular_attar' element={<PopularAttars />} />
            <Route path='islamic/attars/alifAttars' element={<AlifAttars />} />
            {/*--------------------- start Beauty  categories ---------------------- */}

            {/*--------------------- start sports  categories ---------------------- */}
            <Route path='sports' element={<SportsCategories />} />
            {/*--------------------- end sports  categories ---------------------- */}

            <Route path='products/:productId' element={<ProductDetails />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register' element={<Register />} />

          <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
            <Route index element={<Profile />} />
            <Route path='address' element={<Address />} />
            <Route path='address/add_shipping_address' element={<AddShippingAddress />} />
            <Route path='address/:addressId' element={<UpdateShippingAddress />} />
            <Route path='myOrders' element={<Orders />} />
            <Route path='myOrder/:myOrderId' element={<OrderDetails />} />
          </Route>

          <Route path='/shopping_cart' element={<Cart />} />
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
        {/*         <Footer /> */}
        <BottemHeader />
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
    </AppContext>
  );
}

export default App;
