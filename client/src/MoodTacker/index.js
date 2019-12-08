import React from "react";
import { FaChartLine } from "react-icons/fa";
import { TiPlus, TiChartLine } from "react-icons/ti";
import Button from "../uiComponents/button";
import Row from "../uiComponents/row";
import Column from "../uiComponents/column";

const MoodTracker = () => {
	return (
		<>
			<Column>
				<Row justifyContent="center" gapBottom="2em">
					<Column alignItems="center">
						<h1>Mood Tracker</h1>
						<p>
							Start tracking your daily moods to begin recognizing patterns in
							how they change over time.
						</p>
					</Column>
				</Row>
				<Row justifyContent="center">
					<Button
						primary
						label="Log New Mood"
						icon={<TiPlus />}
						gapRight="0.5em"
					/>
					<Button
						primary
						label="View Mood History  "
						icon={<FaChartLine />}
						gapLeft="0.5em"
					/>
				</Row>
			</Column>
		</>
	);
};

export default MoodTracker;
