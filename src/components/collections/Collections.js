import ActionButton from "../global/ActionButton/ActionButton";
import CategoryItems from "./CategoryItems";
import {
  StyledCategorySection,
  StyledCollections,
  StyledHeading,
  StyledSubHeading,
} from "./styledComponents";

function Collections() {
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
      <ActionButton title="Explore" />
    </StyledCollections>
  );
}

export default Collections;
