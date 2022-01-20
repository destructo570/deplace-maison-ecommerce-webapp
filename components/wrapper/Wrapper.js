import { motion } from "framer-motion";
import styled from "styled-components";

const StyledWrapper = styled(motion.div)`
  padding-left: ${({ theme }) => theme.layout.small.pageLeftPadding};
  padding-right: ${({ theme }) => theme.layout.small.pageRightPadding};
  margin-top: ${({ theme }) => theme.layout.small.pageTopMargin};
  margin-bottom: ${({ theme }) => theme.layout.small.pageTopMargin};
  max-width: ${({ theme }) => theme.layout.medium.size};

  @media (min-width: ${({ theme }) => theme.layout.medium.size}) {
    margin-left: auto;
    margin-right: auto;
  }
`;
function Wrapper(props) {
  return (
    <StyledWrapper
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut" }}
    >
      {props.children}
    </StyledWrapper>
  );
}

export default Wrapper;
