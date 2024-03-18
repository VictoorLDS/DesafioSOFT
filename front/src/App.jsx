import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Categories from './pages/Categories';
import Products from './pages/Products';
import Home from './pages/Home';
import History from './pages/History';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/history" element={<History/>}/>
     </Routes>
     </BrowserRouter>

    </>
  );
}

export default App
