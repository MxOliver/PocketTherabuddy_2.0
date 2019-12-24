import React from "react";
import { ButtonSolid } from "../UIComponents/button";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { ADD_USER } from "../graphql/mutations";

const SubmitHandler = ({ handleSubmit, values, history }) => {
	///const [createUser] = useMutation(ADD_USER);

	// handleSubmit runs validations, but should not submit...
	// Formik doens't exposue a validation method that also touches all
	// the fields , so this is a work around to prevent the submission of an empty form (no fields touched)
	// const validate = () =>
	// 	new Promise(resolve => {
	// 		handleSubmit();
	// 		return setTimeout(resolve, 2000);
	// 	});

	// const afterSubmit = () => {
	// 	return history.push("/dashboard");
	// };

	const submitValues = async () => {
		console.log(values);
		// 	await validate(values);
		// 	return createUser({
		// 		input: {
		// 			values
		// 		}
		// 	})
		// 		.then(() => {
		// 			return afterSubmit();
		// 		})
		// 		.catch(err => {
		// 			console.log(err);
		// 		});
	};

	return <ButtonSolid label="Sign In" gapTop="2em" onClick={submitValues} />;
};

export default withRouter(SubmitHandler);
