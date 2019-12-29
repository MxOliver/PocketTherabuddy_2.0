import styled from "styled-components";

export const Card = styled.div`
	padding: 3em;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	border-radius: 5px;
	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
	> img {
		border-radius: 5px 5px 0 0;
	}
`;

export const CardBody = styled.div`
	padding: 2px 16px;
`;
