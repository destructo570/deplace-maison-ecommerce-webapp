import Link from "next/link";
import { StyledInfo, StyledSecondaryLink } from "./styledComponents";

function Info() {
  return (
    <StyledInfo>
      <div>
        <p>Info</p>
        <br />
        <ul>
          <li>
            <Link href="/faq">Faq</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
          <li>
            <Link href="/returns">Cancelaciones</Link>
          </li>
        
        </ul>
      </div>
      <StyledSecondaryLink>
        <Link href="/credits">Créditos</Link>
      </StyledSecondaryLink>
    </StyledInfo>
  );
}

export default Info;
