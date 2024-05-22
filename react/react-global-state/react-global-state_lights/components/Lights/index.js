import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ allLights }) {
  return (
    <StyledLights>
      {allLights.map((light) => (
        <li key={light.id}>
          <light name={light} />
        </li>
      ))}
    </StyledLights>
  );
}
