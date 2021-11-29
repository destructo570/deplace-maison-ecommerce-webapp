import { StyledPolicy } from "./styledComponents";

function Policy() {
  return (
    <StyledPolicy>
      <div>
        <p>Info</p>
        <ul>
          <li>
            <a href="google.com">Terms</a>
          </li>
          <li>
            <a href="google.com">Privacy</a>
          </li>
          <li>
            <a href="google.com">Cookie</a>
          </li>
        </ul>
      </div>
      <div>&copy; 2021 DEPLACE MAISON</div>
    </StyledPolicy>
  );
}

export default Policy;
