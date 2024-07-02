import React, { createContext, useState, useContext ,useEffect} from "react";

export const CartContext = createContext();

export const ProviderContext = ({ children }) => {
  
  const [cart, setCart] = useState(()=>{
  const Savedcart = localStorage.getItem('cart');    //Initialized the state to cart value if there is no cart value then empty array is initialized
  return Savedcart ? JSON.parse(Savedcart):[];
  });

  const [totAmount,setTotAmount] = useState(0);
  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
    var tot=0;
    console.log(cart)
    for(let i=0;i<cart.length;++i){
        tot+=Number(cart[i].c)
    }
    setTotAmount(tot)

  }, [cart]);
  
  const addCart = (item) => {
    setCart((prevCart) => {
        const existingItem = prevCart.find(cartItem => cartItem.id === item.id && cartItem.size === item.size);
        if (existingItem) {
          return prevCart.map(cartItem =>
            cartItem.id === item.id && cartItem.size === item.size
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        }
        return [...prevCart, { ...item, quantity: 1 }];
      });    
  };
   

  const pro = {
    addCart,
    cart,
    setCart,
    totAmount
  };

  return <CartContext.Provider value={pro}>{children}</CartContext.Provider>;
};
  