import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { GraphQLError } from "graphql";
import { CREATE_HABIT } from "../../graphql/mutations";
//import { mapFormValuesToGraphQL } from "./FormMappingToGraphQL";
import { ButtonSolid } from "../../UIComponents/button";
import { withRouter } from "react-router-dom";

const SubmitHandler = ({ values, gapTop, handleSubmit, history }) => {
	const [createHabit] = useMutation(CREATE_HABIT);

	const afterSubmit = () => {
		return history.push("/habit_tracker");
	};

	// const submitValues = async () => {
	// 	//let habitVariables = mapFormValuesToGraphQL(values);

	// 	try {
	// 		createHabit({ variables: { input: habitVariables } })
	// 			.then(res => {
	// 				console.log(res);
	// 			})
	// 			.then(() => {
	// 				afterSubmit();
	// 			});
	// 	} catch (err) {
	// 		throw new GraphQLError(err);
	// 	}
	// };

	return (
		<ButtonSolid
			gapTop="5em"
			label="Add Habit"
			//onClick={submitValues}
			gapTop={gapTop}
			justifyContent="flex-start"
		/>
	);
};

export default withRouter(SubmitHandler);
