import styled, { css } from "styled-components";

export default function BoxWithClassName({ $isBlack }) {
  return <StyledBox $isBlack />;
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;
  }
`;
