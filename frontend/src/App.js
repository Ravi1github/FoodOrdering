
import './App.css';
import Home from './component/screen/Home';
import {BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Login from './component/screen/Login';
import Singup from './component/screen/Singup';
import { CartProvider } from './component/screen/Contextreducer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';

import About from './component/screen/About';








function App() {
  return (
    <>
    <CartProvider>
    
    <Router>
   <div>
   <div> <Navbar/>  </div>
<Routes>
<Route  exact path='/' element={<Home/>} />
<Route  exact path='/login' element={<Login/>} />
<Route  exact path='/signup' element={<Singup/>} />
<Route  exact path='/about' element={<About/>} />
</Routes>

   </div>

   </Router>
 
   </CartProvider>
   
   </>
  );
}

export default App;
