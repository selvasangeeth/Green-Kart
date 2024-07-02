import React, { useState, useContext, useEffect } from "react";
import Style from "./Cart.module.css";
import { CartContext } from "../ProviderContext";
import Nav from "../components/Nav";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [totAmount, setTotAmount] = useState(0);
  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const Navigate = useNavigate();

  useEffect(() => {
    const calculateTotalAmount = () => {
      const total = cart.reduce(
        (sum, item, index) => sum + item.price * quantities[index],0);
      setTotAmount(total);
    };
    calculateTotalAmount();   
  }, [cart, quantities]);




  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };

  const handleQuantityIncrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  const handleQuantityDecrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  const handleRemove = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };
  const chec=()=>{
    Navigate('/checkout',{ state:{total:totAmount}})
  }
  
  return (
    <div>
      <Nav />
      <div className={Style.cartcontainer}>
        { cart.length===0 ? (<p className={Style.empty}>Cart is Empty</p>):(
        cart.map((p, i) => (
          <div className={Style.overall} key={i}>
            <div className={Style.img}>
              <img src={p.image} alt="image" />
            </div>
            <div className={Style.productDetails}>
              <h3>{p.name}</h3>
              <p className={Style.price}>
                Price : {calculateTotal(p.price, quantities[i])}
              </p>
              <p className={Style.quantity}>Quantity : {quantities[i]}</p>
              <button
                className={Style.increase}
                onClick={() => handleQuantityIncrease(i)}
              >
                +
              </button>
              <button
                className={Style.decrease}
                onClick={() => handleQuantityDecrease(i)}
              >
                -
              </button>
              <button className={Style.remove} onClick={() => handleRemove(i)}>
                Remove
              </button>
            </div>
          
     
          </div>
        )))}
        <div className={Style.totalcost}>
          <p className={Style.to}>
            TOTAL COST : <span className={Style.tot}>{totAmount}</span> <span className={Style.checkout}><button onClick={chec} className={Style.chbut} disabled={cart.length===0}> CHECK OUT</button></span>
          </p>
        </div>
     
      </div>
    </div>
  );
};

export default Cart;
