import emailIcon from "../../assets/icons/news-icon.svg";
import InputField from "../global/InputField/InputField";
import { StyledNewsLetter } from "./styledComponents";

function NewsLetter() {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <StyledNewsLetter>
      <p>Subscribe to newsletter</p>
      <img src={emailIcon.src} alt=""></img>
      <form onSubmit={submitHandler}>
        <h4>Subscribe to our newsletter</h4>
        <InputField
          type="email"
          name="email"
          ctaTitle="submit"
          placeholder="email address"
        />
      </form>
    </StyledNewsLetter>
  );
}

export default NewsLetter;
