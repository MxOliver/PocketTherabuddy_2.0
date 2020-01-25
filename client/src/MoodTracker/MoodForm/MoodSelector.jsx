import React from "react";
import { get, startCase } from "lodash-es";
import FormSelect from "../../UIComponents/select";
import Column from "../../UIComponents/column";
import Row from "../../UIComponents/row";
import ExcitedIcon from "../../assets/Excited";
import TiredIcon from "../../assets/Tired";
import SadIcon from "../../assets/Sad";
import HappyIcon from "../../assets/Happy";
import FineIcon from "../../assets/Fine";
import AngryIcon from "../../assets/Angry";
import AnxiousIcon from "../../assets/Anxious";
import { Grid, Item } from "../../UIComponents/grid";

const MoodSelector = ({
	formBag: { values, setFieldValue, handleChange, errors, touched },
	data
}) => {
	return (
		<>
			<Grid justify="center">
				<Item>
					<HappyIcon />
				</Item>
				<Item>
					<ExcitedIcon />
				</Item>
				<Item>
					<FineIcon />
				</Item>
				<Item>
					<AnxiousIcon />
				</Item>
				<Item>
					<SadIcon />
				</Item>
				<Item>
					<AngryIcon />
				</Item>
			</Grid>
		</>
	);
};

export default MoodSelector;
