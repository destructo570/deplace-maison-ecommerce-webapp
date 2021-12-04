import {
  StyledActions,
  StyledProductFinalPrice,
  StyledProductItem,
  StyledProductName,
  StyledProductPrice,
  StyledProductSize,
  StyledPromoProduct,
} from "./styledComponents";
import unisexIcon from "../../assets/icons/unisex-label.svg";
import ActionButton from "../global/ActionButton/ActionButton";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import useFetch from "../../hooks/useFetch";

function PromoProducts() {
  const cartCtx = useContext(CartContext);

  const { data, isLoading, error } = useFetch(
    "https://deplacemaisontest-default-rtdb.firebaseio.com/promo-products.json"
  );

  if (error) {
    console.log(error);
  }

  const fetchedProductList = [];

  for (let key in data) {
    fetchedProductList.push({
      id: key,
      name: data[key].name,
      type: data[key].type,
      size: data[key].size,
      price: data[key].price,
      discount: data[key].discount,
      img: data[key].img,
    });
  }

  const products = (
    <ul>
      {fetchedProductList.map((item) => {
        return (
          <StyledProductItem
            key={item.id}
            id={item.id}
            name={item.name}
            type={item.type}
            size={item.size}
            discount={item.discount}
            price={item.price}
            onClick={cartCtx.addItem.bind(null, item.id)}
          >
            <img src={item.img} alt=""></img>
            {item.type === "unisex" ? <img src={unisexIcon} alt=""></img> : ""}
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
