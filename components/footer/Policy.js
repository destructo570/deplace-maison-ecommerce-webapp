import { StyledPolicy } from "./styledComponents";

function Policy() {
  return (
    <StyledPolicy>
      <div>
        <p>Policy</p>
        <ul>
          <li>
            <a href="/terms">Terms</a>
          </li>
          <li>
            <a href="/privacy">Privacy</a>
          </li>
          <li>
            <a href="/cookie">Cookie</a>
          </li>
        </ul>
      </div>
      <div>&copy; 2021 DEPLACE MAISON</div>
    </StyledPolicy>
  );
}

export default Policy;
