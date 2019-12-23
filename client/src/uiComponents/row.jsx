import styled from "styled-components";
import { device } from "../Utils/deviceBreakpoints";

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: ${props => props.justifyContent};
	align-items: ${props => props.alignItems};
	margin-left: ${props => props.gapLeft};
	margin-right: ${props => props.gapRight};
	margin-top: ${props => props.gapTop};
	margin-bottom: ${props => props.gapBottom};
	@media ${device.tablet} {
		flex-direction: column;
		justify-content: center;
		align-items: ${props => props.justifyContent};
		width: 100%;
	}
`;

export default Row;
