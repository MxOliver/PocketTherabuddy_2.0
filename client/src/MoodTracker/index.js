import { withFormik } from "formik";
import Form from "./AddMood";
const moodValidation = {};

const AddMoodForm = withFormik({
	mapPropsToValues: () => ({}),

	validationSchema: moodValidation,

	handleSubmit: values => {
		console.log(values);
	}
})(Form);

export default AddMoodForm;
