import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoodTrackerLanding from "./MoodTracker";
import AddMood from "./MoodTracker/Create";
import { SignIn, SignUp } from "./Users";
import Home from "./Home";
import Navigation from "./Navigation/MainNav";
import DashBoard from "./Dashboard";
import HabitTrackerLanding from "./HabitTracker";
import ToolBox from "./Toolbox";
import Workbook from "./Workbook";

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
						<Route exact path="/workbook" component={Workbook} />
						<Route
							exact
							path="/habit_tracker"
							component={HabitTrackerLanding}
						/>
					</Switch>
				</Router>
			</div>
		</div>
	);
};

export default App;
