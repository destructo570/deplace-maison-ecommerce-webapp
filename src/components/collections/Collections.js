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
        <h1 className="head-1">SPRING,</h1>
        <div className="sub-head">
          <h1 className="head-2">SUMMER</h1>
          <StyledSubHeading>
            COLL.
            <br />
            2021
          </StyledSubHeading>
        </div>
      </StyledHeading>
      <StyledCategorySection>
        <CategoryItems />
      </StyledCategorySection>
      <ActionButton title="Explore" />
    </StyledCollections>
  );
}

export default Collections;
