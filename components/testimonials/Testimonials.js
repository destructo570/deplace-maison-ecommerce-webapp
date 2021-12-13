import { StyledTestimonialItem, StyledTestimonials } from "./styledComponents";
import quoteIcon from "../../assets/icons/quote-mark.svg";

function Testimonials() {
  return (
    <StyledTestimonials>
      <img src={quoteIcon.src} alt=""></img>
      <StyledTestimonialItem>
        <h2>William Gibson</h2>
        <p>
          Good things come to those who wait – Déplacé Maison is what has been
          missing in the modern fashion industry for years. Buy a shoe of high
          quality and design it finally happened.
        </p>
      </StyledTestimonialItem>
    </StyledTestimonials>
  );
}

export default Testimonials;
