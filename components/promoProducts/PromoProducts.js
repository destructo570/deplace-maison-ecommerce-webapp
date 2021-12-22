import {
  StyledActions,
  StyledProductFinalPrice,
  StyledProductImage,
  StyledProductItem,
  StyledProductName,
  StyledProductPrice,
  StyledProductSize,
  StyledPromoProduct,
} from "./styledComponents";
import unisexIcon from "../../assets/icons/unisex-label.svg";
import ActionButton from "../global/ActionButton/ActionButton";
import { useRouter } from "next/router";

function PromoProducts(props) {
  const data = props.products.data;
  const router = useRouter();

  const fetchedProductList = [];

  for (let key in data) {
    fetchedProductList.push({
      id: data[key].id,
      name: data[key].name,
      color: data[key].color,
      type: data[key].type,
      price: data[key].price,
      finalPrice: data[key].finalPrice,
      img: data[key].img,
    });
  }

  const openProductLinkHandler = (id) => {
    router.push(`/products/${id}`);
  };

  const products = (
    <ul>
      {fetchedProductList.map((item) => {
        return (
          <StyledProductItem
            key={item.id}
            onClick={openProductLinkHandler.bind(null, item.id)}
          >
            <StyledProductImage src={item.img} alt=""></StyledProductImage>
            {item.type === "unisex" ? (
              <img src={unisexIcon.src} alt=""></img>
            ) : (
              ""
            )}
            <StyledProductSize>{item.size}</StyledProductSize>
            <StyledProductName>{item.name}</StyledProductName>
            <StyledProductPrice>${item.price} USD</StyledProductPrice>
            <StyledProductFinalPrice>
              ${item.finalPrice} USD
            </StyledProductFinalPrice>
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
