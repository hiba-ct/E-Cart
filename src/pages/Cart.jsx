import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem,incQuantity, decQuantity, emptyCart } from '../redux/slice/cartSlice'; // Import your action here

const Cart = () => {
  const navigate = useNavigate()
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(userCart?.map(item => item.totalPrice)?.reduce((a, b) => a + b, 0));
  }, [userCart]);


  const handleDecrementQuantity = (product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckout = ()=>{
    dispatch(emptyCart())
    alert("order confirmed...Thank you for purchasing with us!!!")
    navigate('/')
  }
  return (
    <>
      <Header />

      <div style={{ paddingTop: '100px' }} className="container px-2 mx-auto">
        {userCart?.length > 0 ? (
          <>
            <h1
              style={{ paddingTop: '100px' }}
              className="text-5xl text-blue-600 font-bold"
            >
              Cart Summary
            </h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="col-span-2 border rounded shadow p-5">
                {/* table */}
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <td className="font-semibold">#</td>
                      <td className="font-semibold">Name</td>
                      <td className="font-semibold">Image</td>
                      <td className="font-semibold">Quantity</td>
                      <td className="font-semibold">Price</td>
                      <td className="font-semibold">...</td>
                    </tr>
                  </thead>
                  <tbody>
                    {userCart?.map((product, index) => (
                      <tr key={product?.id}>
                        <td>{index + 1}</td>
                        <td>{product?.title}</td>
                        <td>
                          <img
                            width={'70px'}
                            height={'70px'}
                            src={
                              product?.thumbnail ||
                              'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            }
                            alt={product?.title}
                          />
                        </td>
                        <td>
                          <div className="flex">
                            <button onClick={()=>handleDecrementQuantity(product)}className="font-bold">-</button>
                            <input
                              style={{ width: '40px' }}
                              value={product?.quantity}
                              type="text"
                              className="border p-1 rounded ms-2 me-2"
                              readOnly
                            />
                            <button onClick={()=>dispatch(incQuantity(product))} className="font-bold">+</button>
                          </div>
                        </td>
                        <td>${product?.totalPrice}</td>
                        <td>
                          <button
                            onClick={() => dispatch(removeCartItem(product?.id))}
                            className="text-red-600"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="float-right mt-4">
                  <button onClick={()=>dispatch(emptyCart())} className="bg-red-600 text-white p-2 rounded me-3">
                    EMPTY CART
                  </button>
                  <Link className="bg-blue-600 text-white p-2 rounded" to={'/'}>
                    SHOP MORE
                  </Link>
                </div>
              </div>

              <div className="col-span-1 border rounded shadow px-10 p-5">
                {/* checkout */}
                <h1 className="text-2xl font-bold">
                  Total Amount:
                  <span className="text-red-600">
                    ${cartTotal}
                  </span>
                </h1>
                <hr />

                <button onClick={handleCheckout} className="w-full bg-green-600 rounded p-5 text-white font-bold mt-5 text-xl">
                  checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-100 h-1/2"
              src="https://krosfitsports.com/public/empty-cart.gif"
              alt="Empty Cart"
            />
            <h1 className="text-blue-600 font-bold">Your cart is empty!!!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
