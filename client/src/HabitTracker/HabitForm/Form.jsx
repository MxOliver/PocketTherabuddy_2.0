import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_HABIT_TYPES } from "../../graphql/queries";
import FormSelect from "../../UIComponents/select";
import ButtonSelect from "../../UIComponents/buttonSelect";
import SubmitHandler from "./SubmitHandler";
import Column from "../../UIComponents/column";
import { get, startCase } from "lodash-es";
import Spinner from "@atlaskit/spinner";

const Form = ({
	handleChange,
	errors,
	touched,
	handleBlur,
	setFieldValue,
	values,
	setFieldTouched
}) => {
	///if (loading) return <Spinner size="small" />;

	return (
		<Column alignItems="left">
			<SubmitHandler values={values} />
		</Column>
	);
};

export default Form;
