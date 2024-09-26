import Link from "next/link";
import { StyledNotFound } from "./styledComponents";
import cassette from "../../assets/icons/cassette.svg";
import Marquee from "react-easy-marquee";

function NotFound() {
  return (
    <StyledNotFound>
      <Marquee
        duration={60000}
        width="100%"
        height="100%"
        axis="x"
        align="center"
        pauseOnHover={false}
        reverse={true}
      >
        Donde el descanso te da vida
      </Marquee>
      <p>
        Wrap the cassette up and <Link href="/">come back</Link> to home.
      </p>
    </StyledNotFound>
  );
}

export default NotFound;
