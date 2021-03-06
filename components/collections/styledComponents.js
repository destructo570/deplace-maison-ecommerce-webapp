import styled from "styled-components";
import { motion } from "framer-motion";

//
// Collections Section
//

export const StyledCollections = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const StyledHeading = styled(motion.div)`
  h1 {
    font-size: clamp(4rem, 15vw, 8rem);
    line-height: 0.9em;
    letter-spacing: -5px;
    font-weight: 400;
    display: inline-block;
    text-align: end;
    width: 100%;
  }

  h3 {
    font-size: clamp(1.3rem, 4vw, 2.5rem);
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

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    justify-content: space-around;
  }
`;

//
// Category Item Component
//

export const StyledCategoryItem = styled(motion.div)`
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
