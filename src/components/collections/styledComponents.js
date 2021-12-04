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

  @media (min-width: 800px) {
    main {
      padding-left: 16rem;
      padding-right: 8rem;
    }
  }
`;

export const StyledHeading = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  .head-1 {
    grid-column: 2/-1;
  }

  .head-2 {
    grid-column: 1/-2;
  }

  .sub-head {
    display: grid;
    grid-auto-flow: row;
    grid-column-start: -2;
  }
`;

export const StyledSubHeading = styled.h3`
  grid-row: span 1;
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
