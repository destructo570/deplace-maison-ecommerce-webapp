import styled from "styled-components";

export const StyledTestimonials = styled.section`
  margin-top: 3em;
  margin-bottom: 3em;
  padding-left: 3.5rem;
  margin-right: 3rem;
  position: relative;

  img {
    max-width: 60px;
  }
`;

export const StyledTestimonialItem = styled.div`
  position: absolute;
  display: flex;
  padding: 1em;

  top: 0px;

  h2 {
    font-family: "Cyberthrone";
    width: 40%;
  }

  p {
    font-size: 0.6rem;
    width: 60%;
    line-height: 10px;
  }
`;
