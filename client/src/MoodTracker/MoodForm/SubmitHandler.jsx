import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { GraphQLError } from "graphql";
import { CREATE_MOOD } from "../../graphql/mutations";
import { mapFormValuesToGraphQL } from "./FormMappingToGraphQL";
import { Button } from "../../UIComponents/button";

const SubmitHandler = ({ values, gapTop }) => {
	const [createMood] = useMutation(CREATE_MOOD);

	const submitValues = async () => {
		let moodVariables = mapFormValuesToGraphQL(values);

		try {
			createMood({ variables: { input: moodVariables } }).then(res => {
				console.log(res);
			});
		} catch (err) {
			throw new GraphQLError(err);
		}
	};

	return (
		<Button
			gapTop="5em"
			label="Add Mood"
			onClick={submitValues}
			gapTop={gapTop}
		/>
	);
};

export default SubmitHandler;
