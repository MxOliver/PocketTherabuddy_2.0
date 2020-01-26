import React from "react";
import MoodSelector from "./MoodSelector";
import IntensitySelector from "./IntensitySelector";
import Column from "../../UIComponents/column";
import { Card } from "../../UIComponents/card";
import Row from "../../UIComponents/row";
import MoodBannerSquare from "../../assets/MoodBannerSquare";

const FormTabs = ({ data, formBag }) => {
	return (
		<>
			<Row
				gapLeft="2em"
				gapRight="2em"
				justifyContent="center"
				alignItems="center"
			>
				<Column
					justifyContent="center"
					alignItems="flex-start"
					gapTop="auto"
					flex="2"
					gapLeft="1em"
					gapRight="1em"
				>
					<Card>
						<MoodSelector data={data} formBag={formBag} />
						<IntensitySelector data={data} formBag={formBag} />
					</Card>
				</Column>

				<MoodBannerSquare />
			</Row>
		</>
	);
};

export default FormTabs;
