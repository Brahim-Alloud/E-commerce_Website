import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Register from './component/Register';
import Login from './component/Login';
import Slider from './component/Slider';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route exact path='/about' element={<About/>}/> */}
        {/* <Route exact path='/login' element={<Login/>}/> */}
        {/* <Route exact path='/login' element={<Register/>}/> */}
      </Routes>
    </>
  );
}

export default App;
















