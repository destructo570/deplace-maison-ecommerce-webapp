import { StyledActionButton, StytledIcon } from "./styledComponents";
import circleContainerIcon from "../../../assets/icons/circle-container.svg";
import arrowIcon from "../../../assets/icons/arrow.svg";

function ActionButton(props) {
  return (
    <StyledActionButton onClick={props.onShopAll}>
      <p>{props.title}</p>
      <StytledIcon>
        <img src={circleContainerIcon.src} alt=""></img>
        <img src={arrowIcon.src} alt=""></img>
      </StytledIcon>
    </StyledActionButton>
  );
}

export default ActionButton;
