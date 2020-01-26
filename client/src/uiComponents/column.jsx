import styled from "styled-components";

const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${props => props.justifyContent};
	align-items: ${props => props.alignItems};
	align-content: ${props => props.alignContent};
	margin-left: ${props => props.gapLeft};
	margin-right: ${props => props.gapRight};
	margin-top: ${props => props.gapTop};
	margin-bottom: ${props => props.gapBottom};
	width: ${props => props.width};
	text-align: ${props => props.textAlign};
	height: ${props => props.height};
	min-height: ${props => props.minHeight};
`;

// Column.defaultProps = {
// 	width: "100%"
// };

export default Column;
