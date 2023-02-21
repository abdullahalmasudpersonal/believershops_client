
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Categore from './Pages/Categories/Categore/Categore/Categore';
import Attars from './Pages/Categories/Islamic/Attar/Attars';
import IslamicCategore from './Pages/Categories/Islamic/lslamicCategories/IslamicCategore';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header/Header';

function App() {
  return (
    <div>
   <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categore' element={<Categore />}>
          <Route path='islamic' element={<IslamicCategore />} />
          <Route path='islamic/attars' element={<Attars />} />
        </Route>
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
