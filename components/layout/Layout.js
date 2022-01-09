import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import Cart from "../cart/Cart";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import { getCart } from "../../lib/CartUtil";

let isFirstRender = true;

function Layout(props) {
  const [isCartShown, setIsCartShown] = useState(false);
  const cartCtx = useContext(CartContext);

  //Load the stored cart from localStorage
  useEffect(() => {
    //Only get the cart if this is the first render
    if (isFirstRender) {
      cartCtx.replaceCart(getCart());
      isFirstRender = false;
    }
  }, [cartCtx]);

  const onShowCart = () => {
    setIsCartShown((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      {isCartShown && <Cart onHideCart={onShowCart} />}
      <Navigation onShowCart={onShowCart} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
