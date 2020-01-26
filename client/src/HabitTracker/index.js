import React from "react";
import Banner from "../UIComponents/banner";
import { Button } from "../UIComponents/button";
import Row from "../UIComponents/row";
import { mainTheme } from "../UIComponents/theme";

const HabitTracker = () => {
	return (
		<>
			<Banner
				bgColor={mainTheme.colors.strawberry}
				color="black"
				heading="Habit Tracker"
				body="Track your daily habits and view your history to find patterns.
								You can also see your combined habit and mood history to find
								insights about how your habits effect your moods."
			>
				<Row justifyContent="center" gapTop="1em">
					<Button
						href="/habit_tracker/add"
						bgColor={mainTheme.colors.strawberry}
						gapRight="0.5em"
						label="Log New Habit"
					/>

					<Button
						href="/habit_tracker/history"
						bgColor={mainTheme.colors.strawberry}
						gapLeft="0.5em"
						label="Habit History"
					/>
				</Row>
			</Banner>
		</>
	);
};

export default HabitTracker;
