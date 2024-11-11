import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Cart from './Pages/Cart'
import Content from './Pages/Content'
import About from './Pages/About'
import Login from './Pages/Login'
import Product from './Pages/Product'
import PlaceOrder from './Pages/PlaceOrder'
import Orders from './Pages/Orders'
import Nav from './Components/Nav'

function App() {

  return (
<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
  <Nav/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/col' element={<Collection/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/cont' element={<Content/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/prdct' element={<Product/>}/>
<Route path='/plc' element={<PlaceOrder/>}/>
<Route path='/orders' element={<Orders/>}/>
</Routes>
</div>  
)
}

export default App
