import { withFormik } from "formik";
import Form from "./Form";
import React from "react";
import SubmitHandler from "./SubmitHandler";

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

export default MoodForm;
