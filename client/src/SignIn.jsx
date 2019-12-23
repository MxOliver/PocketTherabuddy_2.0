import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { withFormik } from "formik";
import { ADD_USER } from "./graphql/mutations";
import styled from "styled-components";
import { Plants } from "./Plants";
import Row from "./UIComponents/row";
import { FormInput } from "./UIComponents/form";
import Column from "./UIComponents/column";
import { ButtonSolid } from "./UIComponents/button";

const Card = styled.div`
	min-height: 20em;
	max-height: 25em;
	width: 25em;
	background-color: white;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding-top: 1em;
	margin-top: 5em;
	margin-bottom: 1em;
`;

const SignInForm = ({ values, handleChange }) => {
	const [addUser] = useMutation(ADD_USER);
	return (
		<>
			<Row justifyContent="space-evenly" alignItems="center" gapBottom="1em">
				<Column>
					<Row justifyContent="center" alignItems="flex-start">
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
								<ButtonSolid label="Sign In" gapTop="2em" />
							</form>
						</Card>
					</Row>
				</Column>

				<Plants />
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
