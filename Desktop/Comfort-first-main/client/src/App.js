import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Frontpage from './screens/Frontpage';
import Footer from './components/Footer';
import Bookingscreen from './screens/Bookingscreen';
import Servicesscreen from './screens/Servicesscreen';
import Aboutscreen from './screens/Aboutscreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Homescreen from './screens/Homescreen';
function App() {
  return (
    <div className="App">
       <Navbar/>
       {/* <Homescreen/> */}
       <BrowserRouter>
       <Routes>
       <Route path="/" exact element={<Frontpage />} />
       <Route path="/home" exact element={<Homescreen />} />
       <Route path='/book/:roomid' element={<Bookingscreen/>}/>
       <Route path='/services' element={<Servicesscreen/>}/>
       <Route path='/about' element={<Aboutscreen/>}/>
       <Route path='/register' element={<Registerscreen/>}/>
       <Route path='/login' element={<Loginscreen/>}/>

       </Routes>
       </BrowserRouter>

       <Footer></Footer>
    </div>
  );
}

export default App;