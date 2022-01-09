import ProductsList from "../productsList/ProductsList";
import Wrapper from "../../components/wrapper/Wrapper";
import { StyledProducts, StyledProductsHeader } from "./styledComponents";

function Products(props) {
  return (
    <Wrapper>
      <StyledProducts>
        <StyledProductsHeader>
          <h1>All PRODUCTS</h1>
        </StyledProductsHeader>
        <ProductsList products={props.productsList}></ProductsList>
      </StyledProducts>
    </Wrapper>
  );
}

export default Products;
