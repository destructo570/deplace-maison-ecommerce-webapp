import styled from "styled-components";

export const StyledTestimonials = styled.section`
  margin-top: 4em;
  margin-bottom: 8em;
  padding-left: ${({ theme }) => theme.mobile.pageLeftPadding};
  padding-right: ${({ theme }) => theme.mobile.pageRightPadding};
  position: relative;

  img {
    max-width: 60px;
  }
`;

export const StyledTestimonialItem = styled.div`
  position: absolute;
  display: flex;
  padding: 1em;
  top: -10px;

  h2 {
    font-family: "Cyberthrone";
    width: 40%;
    margin-top: 0.2em;
  }

  p {
    font-size: 0.8rem;
    width: 60%;
    line-height: 12px;
  }
`;
