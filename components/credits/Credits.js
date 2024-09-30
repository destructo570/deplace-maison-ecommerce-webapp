import Wrapper from "../wrapper/Wrapper";
import { StyledCreditsHeader } from "./styledComponents";

function Credits() {
  return (
    <Wrapper>
      <StyledCreditsHeader>
        <h1>
          Créditos
        </h1>
        <br/>
        <h2>Somos un equipo que trabajamos para ofreceros el mejor servicio en Casa Carmen.</h2>
        <ul>
        <li>
            <h3>María del Carmen Vicente</h3>
            <h4>CEO, Relaciones públicas, Mantenimiento, Innovación y coordinación.</h4>
          </li>
          <li>
            <h3>Chema Vicente</h3>
            <h4>Desarrollo web, foto, community manager, gestión de plataformas, asesor tecnológico.</h4>
          </li>
        </ul>
      </StyledCreditsHeader>
    </Wrapper>
  );
}

export default Credits;
