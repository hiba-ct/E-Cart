import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '/src/redux/slice/productSlice'


const Home = () => {
  const dispatch =useDispatch()
  const {allProducts,loading,error}=useSelector(state=>state.productReducer)
  console.log(allProducts,loading,error);


  const [CurrentPage,setCurrentPage]=useState(1)
  const productPerPage = 8
const TotalPage = Math.ceil(allProducts?.length/productPerPage)
const CurrentPageLastProductIndex = CurrentPage * productPerPage
const CurrentPageFirstProductIndex = CurrentPageLastProductIndex - productPerPage
const visibleProductCard = allProducts?.slice(CurrentPageFirstProductIndex,CurrentPageLastProductIndex)

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])


  const navigateToNextPage = ()=>{
    if(CurrentPage!=TotalPage){
      setCurrentPage(CurrentPage+1)

    }
  }

  const navigateToPrevPage = ()=>{
    if(CurrentPage!=1){
      setCurrentPage(CurrentPage-1)

    }
  }


  return (
    <>
    <Header insideHome={true}/>
    <div style={{ paddingTop:'100px' }}className='container px-4 mx-auto'>


{
 loading?
 <div className='flex justify-content-center items-center text-lg'>
  <img style={{ paddingTop:'100px' }} width={'300px'}height={'300px'}className='me-2'src='https://media.tenor.com/G7LfW0O5qb8AAAAi/loading-gif.gif'alt="loading"/>Loading...

 </div> 
 :
<>
  
  <div style={{ paddingTop:'100px' }}className='grid grid-cols-4 gap-4 '>
  {
  allProducts?.length>0 ?
  visibleProductCard?.map(product=>(

  
  <div key={product?.id} className='rounded border p-2 shadow'>
    <img width={'100%'}height={'200px'}src={product?.thumbnail} alt=""/>
  <div className='text-center'>
    <h3 className='text-xl font-bold'>{product?.title}</h3>
    <Link className='bg-yellow-500 rounded p-3 mt-3 text-white inline-block' to={`${product?.id}/view`}>View More...</Link>
  </div>
  
  </div>
  ))
  :
  <div className='flex justify-content-center items-center text-red-600 my-5 text-lg'>No products found!!!</div>
  }
</div>
  <div className="text-center text-2xl font-bold ms-5 mt-5">
    <span onClick={navigateToPrevPage}><i className="fa-solid fa-backward"></i></span>
    <span>{CurrentPage} of {TotalPage}</span>
    <span onClick={navigateToNextPage}className='cursor-pointer'><i className="fa-solid fa-forward me-5"></i></span>
  </div>
</>}
    </div>
    </>
  )
}

export default Home