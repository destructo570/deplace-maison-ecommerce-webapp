import styled from "styled-components";

//
// Collections Section
//

export const StyledCollections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};
  margin-top: 6em;

  h1 {
    font-size: clamp(4.5rem, 10vw, 20rem);
    line-height: 0.9em;
    letter-spacing: -5px;
    font-weight: 400;
    display: inline-inline-block;
    text-align: end;
  }
`;

export const StyledHeading = styled.div`
  .sub-head {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledSubHeading = styled.h3`
  font-size: clamp(1.1rem, 3.2vw, 10rem);
  font-weight: 400;
  line-height: 1em;
  padding-top: 0.5rem;
  text-align: end;
`;

//
// Category Section
//

export const StyledCategorySection = styled.div`
  display: flex;
  justify-content: space-between;
`;

//
// Category Item Component
//

export const StyledCategoryItem = styled.div`
  margin-top: 1em;

  & + & {
    margin-left: 0.6em;
  }

  img {
    border: 3px solid ${({ theme }) => theme.color.primaryText};
  }
`;

export const StyledCategoryDetails = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.6rem;
    width: 100%;
    font-weight: 400;
  }
`;
