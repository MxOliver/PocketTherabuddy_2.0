import React from "react";
import Banner from "../UIComponents/banner";
import { Button } from "../UIComponents/button";
import Row from "../UIComponents/row";

const MoodTracker = () => {
	return (
		<>
			<Banner
				bgColor="#EDA931"
				color="black"
				heading="Mood Tracker"
				body="Track your daily moods and view your history to find patterns.
								You can also see your combined habit and mood history to find
								insights about how your actions effect your mood."
			>
				<Row justifyContent="center" gapTop="1em">
					<Button
						href="/mood_tracker/add"
						gapRight="0.5em"
						bgColor="#EDA931"
						label="Log New Mood"
					/>

					<Button
						href="/mood_tracker/history"
						gapLeft="0.5em"
						bgColor="#EDA931"
						label="Mood History"
					/>
				</Row>
			</Banner>
		</>
	);
};

export default MoodTracker;
