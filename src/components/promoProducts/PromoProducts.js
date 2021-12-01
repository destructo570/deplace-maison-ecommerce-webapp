import {
  StyledActions,
  StyledProductFinalPrice,
  StyledProductItem,
  StyledProductName,
  StyledProductPrice,
  StyledProductSize,
  StyledPromoProduct,
} from "./styledComponents";
import { ProductItemList } from "../../dummyData/ProductItemList";
import productImg from "../../assets/images/products/trek-shoe-1.jpeg";
import unisexIcon from "../../assets/icons/unisex-label.svg";
import ActionButton from "../global/ActionButton/ActionButton";

function PromoProducts() {
  const products = (
    <ul>
      {ProductItemList.map((item) => {
        return (
          <StyledProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            type={item.type}
            size={item.size}
            discount={item.discount}
            price={item.price}
          >
            <img src={productImg} alt=""></img>
            <img src={unisexIcon} alt=""></img>
            <StyledProductSize>{item.size}</StyledProductSize>
            <StyledProductName>{item.name}</StyledProductName>
            <StyledProductPrice>${item.price} USD</StyledProductPrice>
            <StyledProductFinalPrice>${item.price} USD</StyledProductFinalPrice>
          </StyledProductItem>
        );
      })}
    </ul>
  );
  return (
    <StyledPromoProduct>
      {products}
      <StyledActions>
        <ActionButton title="Shop All" />
      </StyledActions>
    </StyledPromoProduct>
  );
}

export default PromoProducts;
