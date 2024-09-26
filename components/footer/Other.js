import { StyledOther, StyledSocial, StytledIcon } from "./styledComponents";
import arrowIcon from "../../assets/icons/arrow.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import circleContainerIcon from "../../assets/icons/circle-container.svg";

function Other() {
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <StyledOther>
      <StytledIcon onClick={scrollToTop}>
        <img src={circleContainerIcon.src} alt=""></img>
        <img src={arrowIcon.src} alt=""></img>
      </StytledIcon>
      <StyledSocial>
      <a href="https://www.facebook.com/casacarmencc/" target="_blank" rel="noopener noreferrer">
  <img src={facebook.src} alt="Facebook page" />
</a>
<a href="https://www.instagram.com/casacarmen.es/" target="_blank" rel="noopener noreferrer">
  <img src={instagram.src} alt="Instagram page" />
</a>

      </StyledSocial>
    </StyledOther>
  );
}

export default Other;
