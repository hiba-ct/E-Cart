import { createSlice } from "@reduxjs/toolkit"; // Use 'createSlice' from toolkit

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find(item => item.id === action.payload.id);
            if (existingProduct) {
                // Increment quantity and recalculate total price
                existingProduct.quantity++;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;

                // You don't need to manually filter and reconstruct the state array since the existingProduct is updated in place.
            } else {
                // Add new product to cart
                state.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price // Use product price for totalPrice
                });
            }
        },
     removeCartItem:(state,dataFromCart)=>{
            return state.filter(item=>item.id!=dataFromCart.payload)
        },
        incQuantity : (state,actionFromCart)=>{
            const existingProduct = state.find(item=>item.id==actionFromCart.payload.id)
            existingProduct.quantity++
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProducts = state.filter(item=>item.id!=actionFromCart.payload.id)
            state=[...remainingProducts,existingProduct]
        },
        decQuantity : (state,actionFromCart)=>{
            const existingProduct = state.find(item=>item.id==actionFromCart.payload.id)
            existingProduct.quantity--
            existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
            const remainingProducts = state.filter(item=>item.id!=actionFromCart.payload.id)
            state=[...remainingProducts,existingProduct]
        },
        emptyCart:(state)=>{
            return state=[]
        }
    }
});

// Exporting actions and reducer
export const { removeCartItem,incQuantity,decQuantity,emptyCart } = cartSlice.actions;
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
