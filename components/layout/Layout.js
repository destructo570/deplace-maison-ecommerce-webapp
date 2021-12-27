import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import Cart from "../cart/Cart";
import { useState } from "react";
function Layout(props) {
  const [isCartShown, setIsCartShown] = useState(false);

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
