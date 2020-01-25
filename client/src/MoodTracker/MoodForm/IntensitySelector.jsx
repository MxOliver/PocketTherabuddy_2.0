import React from "react";
import ButtonSelect from "../../UIComponents/buttonSelect";
import { get, startCase } from "lodash-es";
import SubmitHandler from "./SubmitHandler";

const IntensitySelector = ({
	formBag: { values, setFieldValue, handleChange, errors, touched }
}) => {
	return (
		<div style={{ marginTop: "1em", marginBottom: "1em" }}>
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
		</div>
	);
};

export default IntensitySelector;