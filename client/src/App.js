import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoodTrackerLanding from "./MoodTracker";
import AddMood from "./MoodTracker/Create";
import { SignIn, SignUp } from "./Users";
import Home from "./Home";
import Navigation from "./Navigation/MainNav";
import DashBoard from "./Dashboard";
import HabitTrackerLanding from "./HabitTracker";
import AddHabit from "./HabitTracker/Create";
import ToolBox from "./Toolbox";
import Explore from "./Toolbox/Explore";
import MyToolkit from "./Toolbox/MyToolkit";
import Workbook from "./Workbook";
import WorkSheets from "./Workbook/Worksheets";
import ThoughtReframe from "./Workbook/ThoughtReframe";

const App = () => {
	return (
		<div className="app">
			<Navigation />
			<div className="main" style={{ top: 0 }}>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/dashboard" component={DashBoard} />
						<Route exact path="/sign_in" component={SignIn} />
						<Route exact path="/sign_up" component={SignUp} />
						<Route exact path="/mood_tracker" component={MoodTrackerLanding} />
						<Route exact path="/mood_tracker/add" component={AddMood} />
						<Route exact path="/toolbox" component={ToolBox} />
						<Route exact path="/toolbox/explore" component={Explore} />
						<Route exact path="/toolbox/my_toolkit" component={MyToolkit} />
						<Route exact path="/workbook" component={Workbook} />
						<Route exact path="/workbook/explore" component={WorkSheets} />
						<Route
							exact
							path="/workbook/thought_reframe"
							component={ThoughtReframe}
						/>
						<Route
							exact
							path="/habit_tracker"
							component={HabitTrackerLanding}
						/>
						<Route exact path="/habit_tracker/add" component={AddHabit} />
					</Switch>
				</Router>
			</div>
		</div>
	);
};

export default App;
