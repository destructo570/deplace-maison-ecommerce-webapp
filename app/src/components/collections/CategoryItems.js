import { StyledCategoryDetails, StyledCategoryItem } from "./styledComponents";
import womanCollectionImg from "../../assets/images/category/man-section.jpeg";
import manCollectionImg from "../../assets/images/category/woman-section.jpeg";

function CategoryItems() {
  return (
    <>
      <StyledCategoryItem>
        <img src={womanCollectionImg} alt="woman's collection" />
        <StyledCategoryDetails>
          <p>(01)</p>
          <p>MAN</p>
        </StyledCategoryDetails>
      </StyledCategoryItem>
      <StyledCategoryItem>
        <img src={manCollectionImg} alt="men's collection" />
        <StyledCategoryDetails>
          <p>(02)</p>
          <p>WMNS</p>
        </StyledCategoryDetails>
      </StyledCategoryItem>
    </>
  );
}

export default CategoryItems;
