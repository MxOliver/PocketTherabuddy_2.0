import React from "react";
import { get, startCase } from "lodash-es";
import FormSelect from "../../UIComponents/select";
import Column from "../../UIComponents/column";

const MoodSelector = ({
	formBag: { values, setFieldValue, handleChange, errors, touched },
	data
}) => {
	return (
		<>
			<Column gapTop="2em">
				<FormSelect
					options={get(data, "moodEnums", "")}
					className="single-select"
					classNamePrefix="react-select"
					name="type"
					isSearchable={true}
					label="Mood"
					textAlign="left"
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
			</Column>
		</>
	);
};

export default MoodSelector;
