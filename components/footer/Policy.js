import Link from "next/link";
import { StyledPolicy } from "./styledComponents";

function Policy() {
  return (
    <StyledPolicy>
      <div>
        <p>Policy</p>
        <ul>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/cookie">Cookie</Link>
          </li>
        </ul>
      </div>
      <div>&copy; 2021 DEPLACE MAISON</div>
    </StyledPolicy>
  );
}

export default Policy;
