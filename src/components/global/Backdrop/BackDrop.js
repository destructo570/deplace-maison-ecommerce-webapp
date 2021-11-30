import styled from "styled-components";

const StyledBackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 100;
`;

function BackDrop(props) {
  return <StyledBackDrop onClick={props.onClose} />;
}

export default BackDrop;
