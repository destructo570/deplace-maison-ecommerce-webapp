import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import Cart from "../cart/Cart";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import { getCart } from "../../lib/CartUtil";
function Layout(props) {
  const [isCartShown, setIsCartShown] = useState(false);
  const cartCtx = useContext(CartContext);

  //Load the stored cart from localStorage
  useEffect(() => {
    cartCtx.replaceCart(getCart());
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
