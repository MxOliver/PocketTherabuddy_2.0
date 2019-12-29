import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoodTrackerLanding from "./MoodTracker";
import AddMood from "./MoodTracker/Create";
import { SignIn, SignUp } from "./Users";
import Home from "./Home";
import Navigation from "./UIComponents/nav";
import DashBoard from "./Dashboard";

const App = () => {
	return (
		<div className="app">
			<Navigation />
			<div className="main">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/dashboard" component={DashBoard} />
						<Route exact path="/sign_in" component={SignIn} />
						<Route exact path="/sign_up" component={SignUp} />
						<Route exact path="/mood_tracker" component={MoodTrackerLanding} />
						<Route exact path="/mood_tracker/add" component={AddMood} />
					</Switch>
				</Router>
			</div>
		</div>
	);
};

export default App;
