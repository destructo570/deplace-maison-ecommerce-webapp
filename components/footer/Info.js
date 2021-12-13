import Link from "next/link";
import { StyledInfo, StyledSecondaryLink } from "./styledComponents";

function Info() {
  return (
    <StyledInfo>
      <div>
        <p>Info</p>
        <ul>
          <li>
            <Link href="/faq">Faq</Link>
          </li>
          <li>
            <Link href="/returns">Returns</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <StyledSecondaryLink>
        <Link href="/credits">Credits</Link>
      </StyledSecondaryLink>
    </StyledInfo>
  );
}

export default Info;
