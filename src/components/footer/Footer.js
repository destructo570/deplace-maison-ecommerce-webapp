import Info from "./Info";
import NewsLetter from "./NewsLetter";
import Other from "./Other";
import Policy from "./Policy";
import { StyledFooter } from "./styledComponents";

function Footer() {
  return (
    <StyledFooter>
      <NewsLetter />
      <Info />
      <Policy />
      <Other />
    </StyledFooter>
  );
}

export default Footer;
