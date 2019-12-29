import React from "react";
import Banner from "./UIComponents/banner";
import { Button } from "./UIComponents/button";
import Row from "./UIComponents/row";

const Home = () => {
	return (
		<>
			<Banner
				bgColor="#006A82"
				color="white"
				heading="Pocket Therabuddy"
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum."
			>
				<Row
					justifyContent="space-evenly"
					gapTop="2em"
					gapLeft="auto"
					gapRight="auto"
					width="45em"
				>
					<Button primary href="/sign_in" label="Sign In" />
					<Button primary href="/sign_up" label="Sign Up" />
				</Row>
			</Banner>
		</>
	);
};

export default Home;
