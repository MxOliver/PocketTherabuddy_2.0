import React from "react";
import { withFormik } from "formik";
import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

const UserCreation = withFormik({
	mapPropsToValues: () => ({ name: "", email: "", password: "" })
})(SignUpForm);

const UserAuthentication = withFormik({
	mapPropsToValues: () => ({ email: "", password: "" })
})(SignInForm);

export const SignUp = () => {
	return <UserCreation />;
};

export const SignIn = () => {
	return <UserAuthentication />;
};
