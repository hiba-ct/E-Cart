import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/slice/productslice';
import { addToWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice'; // Assuming you have this action

const View = () => {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});
  const userWishlist = useSelector(state => state.wishlistReducer);
  const userCart = useSelector(state => state.cartReducer); // Fetch cart from Redux state
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem('allProducts')) {
      const allProducts = JSON.parse(sessionStorage.getItem('allProducts'));
      setProduct(allProducts?.find(item => item.id == id));
    }
  }, [id]); // Adding id as a dependency

  const handleWishlist = product => {
    const existingProduct = userWishlist?.find(item => item.id === product.id);
    if (existingProduct) {
      alert('Product already in your wishlist!!!');
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const handleCart = product => {
    dispatch(addToCart(product));
    const existingProduct = userCart?.find(item => item.id === product.id);
    if (existingProduct) {
      alert('Product quantity is incrementing!!!');
   
    }
  };

  return (
    <>
      <Header />

      <div style={{ paddingTop: '100px' }} className="flex content-center items-center mx-5">
        <div className="grid grid-cols-2 items-center">
          <img
            className="mx-5"
            style={{ paddingTop: '100px' }}
            width={'60%'}
            height={'60px'}
            src={product?.thumbnail}
            alt=""
          />
          <div>
            <h3 style={{ paddingTop: '100px' }}>PID: {product?.id}</h3>
            <h1 className="text-5xl font-bold">{product?.title}</h1>
            <h4 className="font-bold text-red-600 text-2xl">${product?.price}</h4>

            <h4 className="font-bold">Brand: {product?.brand}</h4>
            <h4 className="font-bold">Category: {product?.category}</h4>

            <h4 className="font-bold">SKU: {product?.sku}</h4>

            <h4 className="font-bold">Weight: {product?.weight}</h4>

            <p>
              <span className="font-bold">{product?.description}</span>
              <hr />
              <div className="flex justify-content-between mt-5">
                <button
                  onClick={() => handleWishlist(product)}
                  className="text-white bg-blue-500 rounded p-2"
                >
                  ADD TO WISHLIST
                </button>
                <button
                  onClick={() => handleCart(product)}
                  className="text-white bg-green-500 rounded p-2"
                >
                  ADD TO CART
                </button>
              </div>
              <h3 className="font-bold my-5">Client Review</h3>
              {product?.reviews?.length > 0 ? (
                product?.reviews?.map((item, index) => (
                  <div key={index} className="border rounded p-2 mb-2">
                    <h5>
                      <span className="font-bold">{item?.reviewerName}:</span> {item?.comment}
                    </h5>
                    <p>
                      Rating: {item?.rating}
                      <i className="fa-solid fa-star text-blue-500"></i>
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-bold text-red-600">No Reviews</p>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
