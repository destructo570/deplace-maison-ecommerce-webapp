import CheckoutProductItem from "./CheckoutProductItem";
import { StyledCheckoutProductList } from "./styledComponents";

function CheckoutProductList(props) {
  const productItems = props.productList.map((product) => (
    <CheckoutProductItem
      name={product.name}
      price={product.price}
      quantity={product.quantity}
      size={product.size}
      color={product.color}
      imgUrl={product.img}
    ></CheckoutProductItem>
  ));
  return <StyledCheckoutProductList>{productItems}</StyledCheckoutProductList>;
}

export default CheckoutProductList;
