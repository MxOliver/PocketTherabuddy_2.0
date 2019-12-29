import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOOD_TYPES } from "../../graphql/queries";
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
	const { loading, data, error } = useQuery(GET_MOOD_TYPES);

	if (loading) return <Spinner size="small" />;

	return (
		<>
			<Column alignItems="left">
				<FormSelect
					options={get(data, "moodEnums", "")}
					className="single-select"
					classNamePrefix="react-select"
					name="type"
					isSearchable={false}
					label="Mood"
					getOptionLabel={option => startCase(option.type.toLowerCase())}
					getOptionValue={option => option.id}
					value={get(values, "mood.type", "")}
					isOptionSelected={option => {
						return option.id === get(values, "mood.type.moodEnumId");
					}}
					handleChange={value => {
						setFieldValue("mood.type", {
							moodEnumId: value.id,
							type: value.type
						});
					}}
					touched={get(touched, ["mood.type"])}
					error={get(errors, ["mood.type"])}
					className="gap-bottom-sm gap-top-sm"
				/>

				<ButtonSelect
					options={[
						{ label: "1", value: 1 },
						{ label: "2", value: 2 },
						{ label: "3", value: 3 },
						{ label: "4", value: 4 },
						{ label: "5", value: 5 },
						{ label: "6", value: 6 },
						{ label: "7", value: 7 },
						{ label: "8", value: 8 },
						{ label: "9", value: 9 },
						{ label: "10", value: 10 }
					]}
					label="Intensity"
					handleChange={event =>
						setFieldValue("mood.intensity", event.target.value.value)
					}
					touched={get(touched, ["mood.intensity"])}
					error={get(errors, ["mood.intensity"])}
					className="gap-bottom-md gap-top-sm"
					value={get(values, "mood.intensity", "")}
				/>

				<SubmitHandler values={values} />
			</Column>
		</>
	);
};

export default Form;
