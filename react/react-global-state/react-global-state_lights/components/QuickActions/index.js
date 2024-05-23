import styled from "styled-components";
import Button from "../Button";
import Lights from "../Lights/Lights";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ allOn, allOff }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          allOff();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          allOn();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
