import styled from "styled-components";

export const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2px
`;

export const Item = styled.div`
  display: flex
  justify-content: center
  padding: .5rem

`;
