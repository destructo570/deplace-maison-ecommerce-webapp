import Link from "next/link";
import { StyledNotFound } from "./styledComponents";
import cassette from "../../assets/icons/cassette.svg";

function NotFound() {
  return (
    <StyledNotFound>
      <img src={cassette.src}></img>
      <marquee>
        404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404 404
        404 404 404 404 404 404
      </marquee>
      <p>
        Wrap the cassette up and <Link href="/">come back</Link> to home.
      </p>
    </StyledNotFound>
  );
}

export default NotFound;
