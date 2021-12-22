import { StyledActions, StyledPromoProduct } from "./styledComponents";
import ActionButton from "../global/ActionButton/ActionButton";
import { useRouter } from "next/router";
import ProductsList from "../productsList/ProductsList";

function PromoProducts(props) {
  const router = useRouter();

  const shopAllHandler = () => {
    router.push(`/products`);
  };

  return (
    <StyledPromoProduct>
      <ProductsList products={props.products} />
      <StyledActions>
        <ActionButton title="Shop All" onShopAll={shopAllHandler} />
      </StyledActions>
    </StyledPromoProduct>
  );
}

export default PromoProducts;
