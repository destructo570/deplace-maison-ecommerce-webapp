import styled from "styled-components";

export const StyledScrollingDivider = styled.marquee`
  margin-top: 2em;
  margin-bottom: 2em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  border: 1px solid ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.secondaryAccent};
`;
