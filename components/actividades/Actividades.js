import Wrapper from "../wrapper/Wrapper";
import { StyledContact, StyledContactItem } from "./styledComponents";

function Contact() {
  return (
    <Wrapper>
      <StyledContact>
        <StyledContactItem>
          <h1>
            Aquí todo lo que puedes hacer
          </h1>
          <div>
            <h4>Consultas generales</h4>
            <a href="mailto:casacarmencc@gmail.com">casacarmencc@gmail.com</a>
          </div>
          <div>
            <h4>Dirección</h4>
            <h2>
              Calle Mondeño, 12<br />
              10692 El Batán, Cáceres <br />
              España
            </h2>
          </div>
          <div>
            <h4>Teléfono</h4>
            <a href="#">+34 639 952 615</a>
          </div>
        </StyledContactItem>
      </StyledContact>
    </Wrapper>
  );
}

export default Contact;