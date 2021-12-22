import ProductsList from "../productsList/ProductsList";
import { StyledProducts } from "./styledComponents";

function Products(props) {
  return (
    <StyledProducts>
      <ProductsList products={props.productsList}></ProductsList>
    </StyledProducts>
  );
}

export default Products;
