import { withFormik } from "formik";
import Form from "./Form";
import React from "react";
import SubmitHandler from "./SubmitHandler";
import Row from "../../UIComponents/row";

const MoodForm = withFormik({
	mapPropsToValues: () => ({
		mood: {
			type: {
				type: "",
				moodEnumId: null
			},
			intensity: null
		}
	}),

	handleSubmit: async values => {
		return <SubmitHandler values={values} />;
	}
})(Form);

const CreateMood = () => {
	return (
		<Row gapLeft="5em" gapTop="5em">
			<MoodForm />
		</Row>
	);
};
export default CreateMood;
