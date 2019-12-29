import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { GraphQLError } from "graphql";
import { CREATE_MOOD } from "../../graphql/mutations";
import { mapFormValuesToGraphQL } from "./FormMappingToGraphQL";
import { ButtonSolid } from "../../UIComponents/button";
import { withRouter } from "react-router-dom";

const SubmitHandler = ({ values, gapTop, handleSubmit, history }) => {
	const [createMood] = useMutation(CREATE_MOOD);

	const afterSubmit = () => {
		return history.push("/mood_tracker");
	};

	const submitValues = async () => {
		let moodVariables = mapFormValuesToGraphQL(values);

		try {
			createMood({ variables: { input: moodVariables } })
				.then(res => {
					console.log(res);
				})
				.then(() => {
					afterSubmit();
				});
		} catch (err) {
			throw new GraphQLError(err);
		}
	};

	return (
		<ButtonSolid
			gapTop="5em"
			label="Add Mood"
			onClick={submitValues}
			gapTop={gapTop}
			justifyContent="flex-start"
		/>
	);
};

export default withRouter(SubmitHandler);
