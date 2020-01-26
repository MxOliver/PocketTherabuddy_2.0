import styled from "styled-components";
import { device } from "../Utils/deviceBreakpoints";

export const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 1px
  justify-content: ${props => props.justify}
  @media ${device.tablet} {
    grid-gap: 1px
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Item = styled.div`
  display: flex
  justify-content: center
  padding: .5rem

`;
