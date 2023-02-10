
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Attars from './Pages/Categore/Islamic/Attar/Attars';
import MainCategore from './Pages/Categore/MainCategore/MainCategore';
import MainIslamic from './Pages/Categore/Islamic/Mainlslamic/MainIslamic';
import Attar from './Pages/Categore/Islamic/Attar/Attar';
import Header from './Pages/Shared/Header/Header/Header';


/* import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

library.add(fas, faTwitter, faFontAwesome, faHatCowboy, faHatChef, faPlateUtensils) */



function App() {
  return (
    <div>
     {/*  <Navber />
      <Routes>
        <Route path='/' element={<Hoomes/>} />
        <Route path='/munira' element={<Munira/>} />
        <Route path='/munira-safwan' element={<Sanfwan/>} /> */}
       {/*  <Route path='/munira' element={<Munira />}>
           <Route index element={<Munira/>} /> 
          <Route path='safwan' element={<Sanfwan/>} />
        </Route> */}
       {/*  <Route path='/masud' element={<Masud/>} />
        <Route path='/mahmud' element={<Mahmud/>} /> */}

  {/*     </Routes> */}
     {/*   <MHeaderCatagore/>  */}
       <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categore' element={<MainCategore />}>
          <Route path='islamic' element={<MainIslamic/>} />
          <Route path='islamic/attar' element={<Attars/>} />
          <Route path='food' element={<Attar/>} />
        </Route>

      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
