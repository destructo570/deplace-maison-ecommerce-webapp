import styled from "styled-components";

//
// Collections Section
//

export const StyledCollections = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};
  margin-top: 6em;
`;

export const StyledHeading = styled.div`
  h1 {
    font-size: clamp(4rem, 15vw, 20rem);
    line-height: 0.9em;
    letter-spacing: -5px;
    font-weight: 400;
    display: inline-inline-block;
    text-align: end;
    width: 100%;
  }

  h3 {
    font-size: clamp(1.3rem, 3.2vw, 10rem);
    font-weight: 400;
    line-height: 0.85em;
    padding-top: 0.2em;
    padding-left: 0.2em;
    text-align: end;
  }
`;

export const StyledSubHeading = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

export const StyledCategoryImage = styled.img`
  border: 1.5px solid ${({ theme }) => theme.color.primaryText};
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
