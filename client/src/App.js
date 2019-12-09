import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoodTracker from "./MoodTracker/Landing";
import AddMood from "./MoodTracker";
import Navigation from "./Navigation/MainNav";

const App = () => {
	return (
		<div className="app">
			<Navigation />
			<Router>
				<Switch>
					<Route path="/mood_tracker" component={MoodTracker} />
					<Route path="/mood_tracker/add" component={AddMood} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
