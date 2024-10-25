import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const pnf = () => {
  return (
    <>
    <Header/>
<div style={{ paddingTop:'100px' }}className='flex justify-center items-center flex-col '>
  <h1 style={{ paddingTop:'100px' }}className='font-bold text-8xl mb-2'>404</h1>
  <img width={'300px'}height={'300px'}src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/03ed9b172565177.64a53c6c10285.gif"alt=""/>

  <h1 className='font-bold text-4xl mb-2'>Looks like you'r lost.</h1>
<p className='mb-2'>The page your looking for is not available!!!</p>
<Link to={'/'}className='bg-green-600 p-2 text-white rounded '>Home</Link>
</div>



    </>
  )
}

export default pnf