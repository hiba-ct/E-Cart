import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slice/productslice'


const Header = ({insideHome}) => {
  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch =useDispatch()
  return (
    <nav className='flex bg-yellow-500 fixed w-full p-5'>
      <Link className='text-primary font-bold text-2xl' to={'/'}> <i className='fa-solid fa-truck-fast me-1 ms-3 'style={{ color:'blue' }}></i> E Cart</Link>
      <ul className='flex-1 text-right'>
    {insideHome &&<li className='list-none inline-block px-5'>
      <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} className='rounded'style={{ width:'300px' }}
     placeholder='Search Products Here'type='text'/></li>}
   
    <li className='list-none inline-block px-5'>
      <Link to={'/wishlist'} className='text-primary font-bold'><i className="fa-solid fa-heart text-red-600 me-1"></i>Wishlist<span className='rounded bg-white p-1 ms-1'>{userWishlist?.length}</span></Link></li>
    
    <li className='list-none inline-block px-5'>
      <Link to={'/cart'} className='text-primary font-bold'><i className='fa-solid fa-cart-plus text-green-600 me-1'></i>
    cart<span className='rounded bg-white p-1 ms-1'>{userCart?.length}</span></Link></li>
    </ul>
    </nav>
  )
}

export default Header