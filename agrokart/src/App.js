import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Seller from './Pages/Seller'
import Seedclick from './components/Seedclick'
import SeedDetails from './Pages/SeedDetails'
import SeedElabroateDetails from './components/SeedElabroateDetails'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/seller" element={<Seller/>}/>
        <Route path ="/SeedClick" element ={<Seedclick/>}/>
        <Route path='/SeedDetails' element={<SeedDetails/>}/>
        <Route path='/SeedElaborateDetails' element={<SeedElabroateDetails/>}/>

        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
