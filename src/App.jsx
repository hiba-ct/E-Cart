 import { Route,Routes } from 'react-router-dom' 
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Pnf from './pages/pnf'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
 

  return (
    <>
 
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/wishlist'element={<Wishlist/>}/>
      <Route path='/:id/view'element={<View/>}/>
      <Route path='/*'element={<Pnf/>}/>
    </Routes>
   
   
   <Footer/>
     
    </>
  )
}

export default App
