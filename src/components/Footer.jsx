import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='row  p-5 flex bg-yellow-500 text-white p-5 mt-5 '>
    <div className="col-md-4" >
    <h5 className='text-primary'>
    <i className='fa-solid fa-truck-fast me-1 ms-3 'style={{ color:'blue' }}></i>
   E Cart
   </h5>


   <p >Enjoy an immersive media experience with our player, 
            built to offer seamless streaming, easy navigation, 
            and high-quality playback. Whether you're listening 
            to music or watching videos, we are committed to 
            providing you with the best user experience. Stay tuned 
            for regular updates and new features, designed to enhance your media journey. 







</p>
                 </div> 
            <div className="col-md-2  d-md-flex justify-content-center" >
             <div>
              <h4 className='mb-4'>Links</h4>
              <div>
             <Link to={'/'}> <p>Home</p></Link>
        
              <Link to={'/home'}><p>Cart</p></Link>
              <Link to={'/watchhistory'}><p>Wishlist</p></Link>
          </div>
            </div>
              </div>
            <div className='col-md-1'></div>
            <div className="col-md-2" >
            <div>
              <h4 className='mb-4'>Guides</h4>
              <div>
              <p>React</p>
              <p>React Bootstrap</p>
              <p>Routing</p>
            </div>
            </div>
            </div>
            <div className="col-md-3 d-md-flex justify-content-center" >
                <div>
              <h4>Contact us</h4>
              <div className='d-flex mt-4'>
                <input type='text'className='form-control'placeholder='Email Id'/>
                <button className='btn btn-primary ms-4'>→</button>
              </div>
              <div className='d-flex justify-content-between mt-4'>
<FontAwesomeIcon icon={faInstagram}className='fa-2x'/>
<FontAwesomeIcon icon={faTwitter}className='fa-2x'/>
<FontAwesomeIcon icon={faFacebook}className='fa-2x'/>
<FontAwesomeIcon icon={faLinkedinIn}className='fa-2x'/>
<FontAwesomeIcon icon={faWhatsapp}className='fa-2x'/>
              </div>
            </div>

   </div>
   <p className='p-3 d-flex justify-content-center '>Copyright © 2024 Abc Store.Built with React</p>
   </div>
   </>
  )
}

export default Footer