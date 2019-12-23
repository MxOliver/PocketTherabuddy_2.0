import React from "react";
import { FaChartLine } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { Button } from "../UIComponents/button";
import Row from "../UIComponents/row";
import Column from "../UIComponents/column";
import { Text, Heading } from "../UIComponents/text";

const MoodTracker = () => {
	return (
		<>
			<Column>
				<Row justifyContent="center" gapBottom="2em">
					<Column alignItems="center" width="55vw">
						<Heading>Mood Tracker</Heading>
						<Text align="center">
							Track your daily moods and view your history to find patterns. You
							can also see your combined habit and mood history to find insights
							about how your actions effect your mood.
						</Text>
					</Column>
				</Row>
				<Row justifyContent="center">
					<Button primary href="/mood_tracker/add" gapRight="0.5em">
						Log New Mood
						<TiPlus />
					</Button>
					<Button primary href="/mood_tracker/history" gapLeft="0.5em">
						Mood History
						<FaChartLine />
					</Button>
				</Row>
			</Column>
		</>
	);
};

export default MoodTracker;
