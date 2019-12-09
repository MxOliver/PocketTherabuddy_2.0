import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_MOOD } from "../graphql/mutations";
import { GET_MOOD_TYPES } from "../graphql/queries";
import ButtonSelect from "../uiComponents/buttonSelect";
import FormSelect from "../uiComponents/select";
import { get } from "lodash-es";

const Form = ({
	handleChange,
	errors,
	touched,
	handleBlur,
	validateForm,
	handleSubmit,
	setFieldValue,
	values,
	setFieldTouched
}) => {
	const { loading, data: moodTypes, error } = useQuery(GET_MOOD_TYPES);

	if (loading) return "loading";

	return (
		<>
			<FormSelect
				options={moodTypes}
				name="type"
				isSearchable={true}
				label="Mood"
				getOptionLabel={option => option.type}
				getOptionValue={option => option.id}
				isOptionSelected={option => {
					return option.type === get(values, "mood.type");
				}}
				handleChange={value => {
					setFieldValue("mood.type", value);
				}}
				touched={get(touched, ["mood.type"])}
				error={get(errors, ["mood.type"])}
			/>
		</>
	);
};

export default Form;
