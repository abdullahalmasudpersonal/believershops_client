
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Home from './Pages/Home/Home';
import Islamic from './Pages/Islamic/Islamic';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import MHeaderCatagore from './Pages/Shared/Header/MHeaderCatagore/MHeaderCatagore';

function App() {
  return (
    <div>
      {/*  <MHeaderCatagore/> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/islamic' element={<Islamic />}>

        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
