import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Seller from './Pages/Seller'
import Seedclick from './components/Seedclick'
import SeedDetails from './Pages/SeedDetails'
import SeedElabroateDetails from './components/SeedElabroateDetails'
import Cart from './Pages/Cart'
import {ProviderContext} from './ProviderContext'
import Checkout from './Pages/Checkout'
import OrderPlaced from './Pages/OrderPlaced'

const App = () => {
  return (
   <ProviderContext>
       <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/seller" element={<Seller/>}/>
        <Route path ="/SeedClick" element ={<Seedclick/>}/>
        <Route path='/SeedDetails' element={<SeedDetails/>}/> 
        <Route path='/SeedElaborateDetails' element={<SeedElabroateDetails  />}/> 
        <Route path='/cart' element={<Cart/>}/>
        <Route path= '/checkout' element={<Checkout/>}/>
        <Route path='/orderplaced' element={<OrderPlaced/>}/>
        </Routes>
        </BrowserRouter>
    </div>
   </ProviderContext>
  )
}

export default App
