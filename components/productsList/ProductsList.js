import {
  StyledProductFinalPrice,
  StyledProductImage,
  StyledProductItem,
  StyledProductName,
  StyledProductPrice,
  StyledProductSize,
} from "./styledComponents";
import unisexIcon from "../../assets/icons/unisex-label.svg";
import { useRouter } from "next/router";

export default function ProductsList(props) {
  const data = props.products;
  const router = useRouter();

  const fetchedProductList = [];

  for (let key in data) {
    fetchedProductList.push({
      id: data[key].id,
      name: data[key].name,
      type: data[key].type,
      price: data[key].price,
      finalPrice: data[key].finalPrice,
      img: data[key].images.sideView,
    });
  }

  const openProductLinkHandler = (id) => {
    router.push(`/products/${id}`);
  };

  return (
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
}
