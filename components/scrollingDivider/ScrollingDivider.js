import Marquee from "react-easy-marquee";
import { StyledScrollingDivider } from "./styledComponent";

function ScrollingDivider() {
  return (
    <StyledScrollingDivider>
      <Marquee
        duration={70000}
        width="100%"
        height="30px"
        axis="x"
        align="center"
        pauseOnHover={false}
        reverse={true}
      >
        Donde el descanso te da vida
      </Marquee>
    </StyledScrollingDivider>
  );
}

export default ScrollingDivider;
