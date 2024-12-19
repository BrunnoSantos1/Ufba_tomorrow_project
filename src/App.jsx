import './App.css'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Product from './Pages/Product/Product'
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes path="Store"> 
      <Route index element={<Home/>}/>
      <Route path=':Product' element={<Product/>}/>
      <Route path=':Cart'element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
