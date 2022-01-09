import Marquee from "react-easy-marquee";
import { StyledScrollingDivider } from "./styledComponent";

function ScrollingDivider() {
  return (
    <StyledScrollingDivider>
      <Marquee
        duration={40000}
        width="100%"
        height="30px"
        axis="x"
        align="center"
        pauseOnHover={false}
        reverse={true}
      >
        DO NOT SCROLL • DEPLACE SHOP • DO NOT SCROLL • DEPLACE SHOP • DO NOT
        SCROLL • DEPLACE SHOP • DO NOT SCROLL • DEPLACE SHOP • DO NOT SCROLL •
        DEPLACE SHOP • DO NOT SCROLL • DEPLACE SHOP • DO NOT SCROLL • DEPLACE
        SHOP • DO NOT SCROLL • DEPLACE SHOP • DO NOT SCROLL • DEPLACE SHOP • DO
        NOT SCROLL • DEPLACE SHOP • DO NOT SCROLL • DEPLACE SHOP • DO NOT SCROLL
        • DEPLACE SHOP • DO NOT SCROLL • DEPLACE SHOP • DO NOT SCROLL • DEPLACE
        SHOP • DO NOT SCROLL • DEPLACE SHOP • DO NOT SCROLL • DEPLACE SHOP
      </Marquee>
    </StyledScrollingDivider>
  );
}

export default ScrollingDivider;
