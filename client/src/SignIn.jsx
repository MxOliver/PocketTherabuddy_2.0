import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { withFormik } from "formik";
import { ADD_USER } from "./graphql/mutations";
import styled from "styled-components";

const Card = styled.div``;

const SignIn = withFormik({
	mapPropsToValues: () => ({ username: "", password: "" }),

	validate: values => {},

	handleSubmit: values => {}
})(SignInForm);

const SignInForm = ({ values, handleChange, handleSubmit }) => {
	const [addUser] = useMutation(ADD_USER);
	return (
		<>
			<Card>
				<form onSubmit={handleSubmit}></form>
			</Card>
		</>
	);
};

export default SignIn;
