import { StyledInfo } from "./styledComponents";

function Info() {
  return (
    <StyledInfo>
      <div>
        <p>Info</p>
        <ul>
          <li>
            <a href="google.com">Faq</a>
          </li>
          <li>
            <a href="google.com">Returns</a>
          </li>
          <li>
            <a href="google.com">Contact</a>
          </li>
        </ul>
      </div>
      <div>Credits</div>
    </StyledInfo>
  );
}

export default Info;
