import { useRouter } from "next/router";
import ActionButton from "../global/ActionButton/ActionButton";
import CategoryItems from "./CategoryItems";
import {
  StyledCategorySection,
  StyledCollections,
  StyledHeading,
  StyledSubHeading,
} from "./styledComponents";

function Collections() {
  const router = useRouter();

  const exploreHandler = () => {
    router.push("/products/");
  };
  return (
    <StyledCollections>
      <StyledHeading>
        <h1>SPRING,</h1>
        <StyledSubHeading>
          <h1>SUMMER</h1>
          <h3>
            COLL.
            <br />
            2021
          </h3>
        </StyledSubHeading>
      </StyledHeading>
      <StyledCategorySection>
        <CategoryItems />
      </StyledCategorySection>
      <ActionButton title="Explore" onClick={exploreHandler} />
    </StyledCollections>
  );
}

export default Collections;
