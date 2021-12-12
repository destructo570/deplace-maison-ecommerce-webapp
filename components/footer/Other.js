import { StyledOther, StyledSocial, StytledIcon } from "./styledComponents";
import arrowIcon from "../../assets/icons/arrow.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import circleContainerIcon from "../../assets/icons/circle-container.svg";

function Other() {
  return (
    <StyledOther>
      <StytledIcon>
        <img src={circleContainerIcon.src} alt=""></img>
        <img src={arrowIcon.src} alt=""></img>
      </StytledIcon>
      <StyledSocial>
        <img src={facebook.src} alt="facebook" />
        <img src={instagram.src} alt="instagram" />
      </StyledSocial>
    </StyledOther>
  );
}

export default Other;
