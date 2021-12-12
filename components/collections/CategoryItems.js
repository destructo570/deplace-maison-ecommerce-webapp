import {
  StyledCategoryDetails,
  StyledCategoryItem,
  StyledCategoryImage,
} from "./styledComponents";
import womanCollectionImg from "../../assets/images/category/man-section.jpeg";
import manCollectionImg from "../../assets/images/category/woman-section.jpeg";
import Image from "next/image";

function CategoryItems() {
  return (
    <>
      <StyledCategoryItem>
        <StyledCategoryImage
          src="https://imgur.com/Ks6yn76.jpeg"
          alt="woman's collection"
        ></StyledCategoryImage>
        <StyledCategoryDetails>
          <p>(01)</p>
          <p>MAN</p>
        </StyledCategoryDetails>
      </StyledCategoryItem>
      <StyledCategoryItem>
        <StyledCategoryImage
          src="https://imgur.com/IoDYvMx.jpeg"
          alt="men's collection"
        />
        <StyledCategoryDetails>
          <p>(02)</p>
          <p>WMNS</p>
        </StyledCategoryDetails>
      </StyledCategoryItem>
    </>
  );
}

export default CategoryItems;
