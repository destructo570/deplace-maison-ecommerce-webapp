import { StyledButton } from "./styledComponents";

function Button(props) {
  return <StyledButton onClick={props.onClick}>{props.title}</StyledButton>;
}
export default Button;
