import styled from "styled-components";

export const StyledActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;

  p {
    text-transform: uppercase;
    font-size: clamp(0.7rem, 2vw, 2rem);
    font-weight: 400;
  }

  p:hover {
    cursor: pointer;
  }
`;

export const StytledIcon = styled.a`
  position: relative;
  margin-left: 0.7rem;

  &:hover {
    cursor: pointer;
  }

  img {
    width: clamp(2.5rem, 5vw, 5rem);
  }

  img:first-child {
    position: absolute;
    right: 0;
  }

  img:last-child {
    padding: 0.6em;
  }
`;
