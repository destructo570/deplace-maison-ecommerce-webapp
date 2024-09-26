import Link from "next/link";
import { StyledPolicy } from "./styledComponents";

function Policy() {
  return (
    <StyledPolicy>
      <div>
        <p>Políticas</p>
        <ul>
          <li>
            <Link href="/terms">Términos</Link>
          </li>
          <li>
            <Link href="/privacy">Privacidad</Link>
          </li>
          <li>
            <Link href="/cookie">Cookies</Link>
          </li>
        </ul>
      </div>
    </StyledPolicy>
  );
}

export default Policy;
