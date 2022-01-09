import styled from "styled-components";

const StyledWrapper = styled.div`
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
  return <StyledWrapper>{props.children}</StyledWrapper>;
}

export default Wrapper;
