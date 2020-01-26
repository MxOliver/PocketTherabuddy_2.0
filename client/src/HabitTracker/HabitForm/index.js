import { withFormik } from "formik";
import Form from "./Form";
import React from "react";
import SubmitHandler from "./SubmitHandler";
import Row from "../../UIComponents/row";

const HabitForm = withFormik({
	mapPropsToValues: () => ({
		habit: {
			type: {
				type: "",
				habitEnumId: null
			},
			duration: null
		}
	}),

	handleSubmit: async values => {
		return <SubmitHandler values={values} />;
	}
})(Form);

const CreateHabit = () => {
	return (
		<Row gapLeft="5em" gapTop="5em">
			<HabitForm />
		</Row>
	);
};
export default CreateHabit;
