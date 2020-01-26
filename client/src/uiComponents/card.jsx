import styled from "styled-components";

export const Card = styled.div`
	padding-left: 3em;
	padding-right: 3em;
	padding-top: 1em;
	padding-bottom: 2em;
	margin-bottom: 1em;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	border-radius: 5px;
	> img {
		border-radius: 5px 5px 0 0;
	}
	width: max-content;
	height: 100%;
	margin-right: 5px;
	background-color: ${props => props.bg};
`;

export const CardBody = styled.div`
	padding: 2px 16px;
`;
