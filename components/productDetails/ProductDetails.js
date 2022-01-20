import { motion } from "framer-motion";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Wrapper from "../wrapper/Wrapper";
import {
  StyledProductTitle,
  StyledProductDetails,
  SytledProductPriceInfo,
  StyledProductImage,
  StyledProductDescription,
  StyledProductOtherInfo,
  StyledProductShippingInfo,
  StyledProductOtherInfoTitle,
  StyledAddToCartButton,
} from "./styledComponents";

function ProductDetails(props) {
  const product = props.data;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (event) => {
    event.preventDefault();
    cartCtx.addItem({
      id: product.name,
      quantity: 1,
      name: product.name,
      color: "black",
      type: "unisex",
      size: "EU 36|US 3|UK 2",
      price: product.price,
      finalPrice: product.finalPrice,
      img: product.images.sideView,
    });
  };

  const initialTitleState = {
    overflow: "hidden",
    minHeight: "10em",
    position: "relative",
  };

  const initialTextState = {
    position: "absolute",
    bottom: "-100px",
    left: "0px",
    minHeight: "inherit",
  };

  return (
    <Wrapper>
      <StyledProductDetails>
        <section>
          <StyledProductTitle initial={initialTitleState}>
            <motion.div
              initial={initialTextState}
              transition={{ duration: 0.6, ease: "easeOut" }}
              animate={{ bottom: "0px" }}
            >
              <h4>{product.category}</h4>
              <h1>{product.name}</h1>
            </motion.div>
          </StyledProductTitle>
          <SytledProductPriceInfo>
            <p>$ {product.price} usd</p>
            <h3>$ {product.finalPrice} USD</h3>
          </SytledProductPriceInfo>
          <StyledProductImage>
            <motion.div
              initial={{ y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              animate={{ y: 0 }}
            >
              <img
                src={product.images.sideView}
                alt={`${product.name} side view`}
              />
            </motion.div>
            <div>
              <p>side</p>
            </div>
          </StyledProductImage>
          <StyledProductDescription>
            {product.description}
          </StyledProductDescription>
        </section>
        <StyledProductOtherInfo>
          <StyledProductOtherInfoTitle>
            {product["manufactured-title"]}
          </StyledProductOtherInfoTitle>
          <StyledProductImage>
            <div>
              <img
                src={product.images.frontView}
                alt={`${product.name} front view`}
              />
            </div>
            <div>
              <p>view</p>
              <p>(01)</p>
            </div>
          </StyledProductImage>
          <StyledProductImage>
            <div>
              <img
                src={product.images.backView}
                alt={`${product.name} back view`}
              />
            </div>
            <div>
              <p>view</p>
              <p>(01)</p>
            </div>
          </StyledProductImage>
          <StyledProductShippingInfo>
            <p>{product["shipping-info"]}</p>
            <p>{product["shipping-cost-info"]}</p>
          </StyledProductShippingInfo>
        </StyledProductOtherInfo>
        <StyledAddToCartButton
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a href="#" onClick={addToCartHandler}>
            Add to cart
          </a>
        </StyledAddToCartButton>
        <hr />
      </StyledProductDetails>
    </Wrapper>
  );
}

export default ProductDetails;
