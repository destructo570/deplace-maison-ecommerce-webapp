import { StyledContact, StyledContactItem } from "./styledComponents";

function Contact() {
  return (
    <StyledContact>
      <StyledContactItem>
        <h1>
          Although we might look like haphazards, we're actually very thought
          through.
        </h1>
        <div>
          <h4>general request</h4>
          <a href="mailto:info@deplacemaison.com">info@deplacemaison.com</a>
        </div>
        <div>
          <h4>sales</h4>
          <a href="mailto:sales@deplacemaison.com">sales@deplacemaison.com</a>
        </div>

        <div>
          <h4>address</h4>
          <h2>
            Via Bramante, 14 <br />
            62014, Corridonia <br />
            (MC) <br />
            Italy
          </h2>
        </div>
        <div>
          <h4>phone</h4>
          <a href="#">+ 39 333 560 7925</a>
        </div>
      </StyledContactItem>
    </StyledContact>
  );
}

export default Contact;
