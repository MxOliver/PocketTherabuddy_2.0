import React from "react";
import Banner from "./UIComponents/banner";
import { ButtonOutline } from "./UIComponents/button";
import Row from "./UIComponents/row";
import { useAuth0 } from "./auth0-config";

const Home = () => {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
					{!isAuthenticated && (
						<>
							<ButtonOutline
								primary
								onClick={() => loginWithRedirect()}
								bgColor="#006A82"
								label="Sign In"
							/>
							<ButtonOutline
								primary
								//onClick={}
								bgColor="#006A82"
								label="Sign Up"
							/>
						</>
					)}
					{isAuthenticated && (
						<ButtonOutline
							primary
							onClick={() => logout()}
							bgColor="#006A82"
							label="Sign Out"
						/>
					)}
				</Row>
			</Banner>
		</>
	);
};

export default Home;
