import styled from "styled-components";

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: ${props => props.justifyContent};
	align-items: ${props => props.alignItems};
	margin-left: ${props => props.gapLeft};
	margin-right: ${props => props.gapRight};
	margin-top: ${props => props.gapTop};
	margin-bottom: ${props => props.gapBottom};
`;

export default Row;
