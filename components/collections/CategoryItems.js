import Image from "next/image";
import { StyledCategoryDetails, StyledCategoryItem } from "./styledComponents";

function CategoryItems() {
  return (
    <>
      <StyledCategoryItem
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.35 }}
      >
        <Image
          src="https://imgur.com/Ks6yn76.jpeg"
          alt="woman's collection"
          width={500}
          height={707}
        ></Image>
        <StyledCategoryDetails>
          <p>(01)</p>
          <p>MAN</p>
        </StyledCategoryDetails>
      </StyledCategoryItem>
      <StyledCategoryItem
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.35, delay: 0.25 }}
      >
        <Image
          src="https://imgur.com/IoDYvMx.jpeg"
          alt="men's collection"
          width={500}
          height={707}
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
