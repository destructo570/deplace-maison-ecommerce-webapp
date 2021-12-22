import ProductsList from "../productsList/ProductsList";
import { StyledProducts, StyledProductsHeader } from "./styledComponents";

function Products(props) {
  return (
    <StyledProducts>
      <StyledProductsHeader>
        <h1>All PRODUCTS</h1>
      </StyledProductsHeader>
      <ProductsList products={props.productsList}></ProductsList>
    </StyledProducts>
  );
}

export default Products;
