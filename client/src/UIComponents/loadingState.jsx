import React from "react";
import Spinner from "@atlaskit/spinner";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 5em;
`;

const LoadingState = () => {
	return (
		<Container>
			<Spinner size="small" />
		</Container>
	);
};

export default LoadingState;
