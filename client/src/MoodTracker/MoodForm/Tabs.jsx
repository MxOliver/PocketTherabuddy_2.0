import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import IntensitySelector from "./IntensitySelector";
import Column from "../../UIComponents/column";

const FormTabs = ({ data, formBag }) => {
	return (
		<Column justifyContent="center">
			<MoodSelector data={data} formBag={formBag} />
			<IntensitySelector data={data} formBag={formBag} />
		</Column>
	);
};

export default FormTabs;
