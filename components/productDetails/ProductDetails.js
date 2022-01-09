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

  return (
    <Wrapper>
      <StyledProductDetails>
        <section>
          <StyledProductTitle>
            <h4>{product.category}</h4>
            <h1>{product.name}</h1>
          </StyledProductTitle>
          <SytledProductPriceInfo>
            <p>$ {product.price} usd</p>
            <h3>$ {product.finalPrice} USD</h3>
          </SytledProductPriceInfo>
          <StyledProductImage>
            <div>
              <img
                src={product.images.sideView}
                alt={`${product.name} side view`}
              />
            </div>
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
        <StyledAddToCartButton>
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
