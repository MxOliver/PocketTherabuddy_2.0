import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { withFormik } from "formik";
import { ADD_USER } from "./graphql/mutations";
import styled from "styled-components";
import Banner from "./UIComponents/banner";
import Row from "./UIComponents/row";
import { FormInput } from "./UIComponents/form";

const Card = styled.div`
	min-height: 30em;
	max-height: 25em;
	width: 25em;
	background-color: white;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding-top: 2em;
	margin-top: 5em;
	margin-bottom: 5em;
	border: 1em solid ${props => props.theme.colors.gold};
`;

const SignInForm = ({ values, handleChange }) => {
	const [addUser] = useMutation(ADD_USER);
	return (
		<>
			{/* <Banner bgColor="#EDA931" /> */}
			<Row
				justifyContent="center"
				alignItems="center"
				style={{ zIndex: 50, height: "100vh" }}
			>
				<Card>
					<h1>Sign In</h1>
					<form>
						<FormInput
							handleChange={handleChange}
							name="username"
							label="Username"
							type="text"
						/>
						<FormInput
							handleChange={handleChange}
							name="password"
							label="Password"
							type="password"
						/>
					</form>
				</Card>
			</Row>
		</>
	);
};

const SignIn = withFormik({
	mapPropsToValues: () => ({ username: "", password: "" }),

	validate: values => {},

	handleSubmit: values => {}
})(SignInForm);

export default SignIn;
