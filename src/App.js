
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Attars from './Pages/Categore/Islamic/Attar/Attars';
import MainIslamic from './Pages/Categore/Islamic/Mainlslamic/MainIslamic';
import Attar from './Pages/Categore/Islamic/Attar/Attar';
import Header from './Pages/Shared/Header/Header/Header';
import MainCategore from './Pages/Categore/MainCategores/MainCategore/MainCategore';

function App() {
  return (
    <div>
       <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categore' element={<MainCategore />}>
          <Route path='islamic' element={<MainIslamic/>} />
          <Route path='islamic/attar' element={<Attars/>} />
          <Route path='foods' element={<Attar/>} />
        </Route>
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
