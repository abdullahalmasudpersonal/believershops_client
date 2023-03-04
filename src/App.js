
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Cart from './Pages/Cart/Cart';
import Categore from './Pages/Categories/Categore/Categore/Categore';
import AttarDetail from './Pages/Categories/Islamic/Attar/AttarDetail/AttarDetail';
import Attars from './Pages/Categories/Islamic/Attar/Attars';
import IslamicCategore from './Pages/Categories/Islamic/lslamicCategories/IslamicCategore';
import Dashboard from './Pages/Dashboards/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Logins/Login/Login';
import Register from './Pages/Logins/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Orders from './Pages/Test/Orders';
import Test from './Pages/Test/Test';

function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categore' element={<Categore />}>
          <Route path='islamic' element={<IslamicCategore />} />
          <Route path='islamic/attars' element={<Attars />} />
          <Route path='islamic/attar/:attarId' element={<AttarDetail />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Notfound/>} />
        <Route path='/test' element={<Test/>} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
