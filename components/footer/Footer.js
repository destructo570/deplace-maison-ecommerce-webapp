import Info from "./Info";
import Other from "./Other";
import Policy from "./Policy";
import { StyledFooter } from "./styledComponents";

function Footer() {
  return (
    <StyledFooter>
      <Info />
      <Policy />
      <Other />
    </StyledFooter>
  );
}

export default Footer;
