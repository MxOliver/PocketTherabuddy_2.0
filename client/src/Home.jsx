import React from "react";
import styled from "styled-components";
import Banner from "./UIComponents/banner";
import { Button } from "./UIComponents/button";
import Row from "./UIComponents/row";

const Home = () => {
	return (
		<>
			<Banner
				heading="Pocket Therabuddy"
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum."
			>
				<Row justifyContent="center" gapTop="2em">
					<Button href="/sign_in" label="Sign In" gapRight="1em" />
					<Button href="/sign_up" label="Sign Up" gapLeft="1em" />
				</Row>
			</Banner>
		</>
	);
};

export default Home;
