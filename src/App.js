import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Admin from './Pages/AdminPanel/Admin/Admin';
import CreateAttar from './Pages/AdminPanel/AdminCategories/Islamics/ManageAttars/CreateAttars/CreateAttar';
import DeleteAttars from './Pages/AdminPanel/AdminCategories/Islamics/ManageAttars/DeleteAttars/DeleteAttars';
import Cart from './Pages/Cart/Cart';
import Categore from './Pages/Categories/Categore/Categore/Categore';
import Datess from './Pages/Categories/Foods/Datess/Datess/Datess';
import Foods from './Pages/Categories/Foods/Foods/Foods';
import AttarDetail from './Pages/Categories/Islamic/Attar/AttarDetail/AttarDetail';
import Attars from './Pages/Categories/Islamic/Attar/Attars';
import Caps from './Pages/Categories/Islamic/Caps/Caps/Caps';
import Jainamazs from './Pages/Categories/Islamic/Jainamazs/Jainamazs/Jainamazs';
import IslamicCategore from './Pages/Categories/Islamic/lslamicCategories/IslamicCategore';
import Tazbeehs from './Pages/Categories/Islamic/Tazbeehs/Tazbeehs/Tazbeehs';
import Address from './Pages/Dashboards/Address/Address';
import Dashboard from './Pages/Dashboards/Dashboard/Dashboard';
import Profile from './Pages/Dashboards/Profile/Profile';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Logins/Login/Login';
import Register from './Pages/Logins/Register/Register';
import Orders from './Pages/Orders/Orders';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header/Header';
import Loading from './Pages/Shared/Loading/Loading';
import Notfound from './Pages/Shared/Notfound/Notfound';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import ScrollingBtn from './Pages/Shared/ScrollingBtn/ScrollingBtn';

function App() {

  return (
    <div>
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
          <Route path='islamic/attars' element={<Attars />} />
          <Route path='islamic/attar/:attarId' element={<AttarDetail />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<Profile />} />
          <Route path='address' element={<Address />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />

        <Route path='/admin' element={<Admin />}>
          <Route path='islamic/create_attar' element={<CreateAttar />} />
          <Route path='islamic/delete_attar' element={<DeleteAttars />} />
        </Route>

        <Route path='*' element={<Notfound />} />

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
