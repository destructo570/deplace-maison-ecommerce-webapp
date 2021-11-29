import { StyledInfo } from "./styledComponents";

function Info() {
  return (
    <StyledInfo>
      <div>
        <p>Info</p>
        <ul>
          <li>
            <a href="#">Faq</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div>Credits</div>
    </StyledInfo>
  );
}

export default Info;
