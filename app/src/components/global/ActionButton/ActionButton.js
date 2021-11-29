import { StyledActionButton, StytledIcon } from "./styledComponents";
import circleContainerIcon from "../../../assets/icons/circle-container.svg";
import arrowIcon from "../../../assets/icons/arrow.svg";

function ActionButton(props) {
  return (
    <StyledActionButton>
      <p>{props.title}</p>
      <StytledIcon>
        <img src={circleContainerIcon} alt=""></img>
        <img src={arrowIcon} alt=""></img>
      </StytledIcon>
    </StyledActionButton>
  );
}

export default ActionButton;
