import { StyledOther, StyledSocial, StytledIcon } from "./styledComponents";
import arrowIcon from "../../assets/icons/arrow.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import circleContainerIcon from "../../assets/icons/circle-container.svg";

function Other() {
  return (
    <StyledOther>
      <StytledIcon>
        <img src={circleContainerIcon} alt=""></img>
        <img src={arrowIcon} alt=""></img>
      </StytledIcon>
      <StyledSocial>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </StyledSocial>
    </StyledOther>
  );
}

export default Other;
