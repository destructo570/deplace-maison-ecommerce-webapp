import styled from "styled-components";

export const StyledTooltip = styled.p`
  padding: 1em;
  background-color: rgba(256, 256, 256, 0.95);
  border: 1px solid #999;
  position: absolute;
  min-width: 250px;
  top: 20px;
  right: 0px;
  text-decoration: none !important;
  text-transform: none;

  &:hover {
    cursor: auto !important;
  }
`;
