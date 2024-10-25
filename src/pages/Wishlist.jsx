import React from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';

const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch();
  const userWishlist = useSelector((state) => state.wishlistReducer);

  const handleCart = product => {
    dispatch(addToCart(product));
    const existingProduct = userCart?.find(item => item.id === product.id);
    dispatch(removeWishlistItem(product.id))
    if (existingProduct) {
      alert('Product quantity is incrementing!!!');
    } 
  }

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className="container px-4 mx-auto">
        {userWishlist?.length > 0 ? (
          <>
            <h1
              style={{ paddingTop: '100px' }}
              className="text-5xl font-bold text-red-500"
            >
              My Wishlist
            </h1>

            <div className="grid grid-cols-4 gap-4 mt-5">
              {userWishlist?.map((product) => (
                <div key={product?.id} className="rounded border p-2 shadow">
                  <img
                    width={'100%'}
                    height={'200px'}
                    src={
                      product?.thumbnail ||
                      'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    }
                    alt=""
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{product?.title}</h3>
                    <div className="flex justify-evenly mt-3">
                      <button
                        className="text-xl"
                        onClick={() => dispatch(removeWishlistItem(product?.id))}
                      >
                        <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
                      </button>
                      <button onClick={()=>handleCart(product)}className="text-xl">
                        <i className="fa-solid fa-cart-plus text-green-600"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-100 h-1/2"
              src="https://krosfitsports.com/public/empty-cart.gif"
              alt="Empty Wishlist"
            />
            <h1 className="text-blue-600 font-bold">
              Your wishlist is empty!!!
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
