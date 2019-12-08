import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoodTacker from "./MoodTacker";
import Navigation from "./Navigation/MainNav";

const App = () => {
	return (
		<div className="app">
			<Navigation />
			<Router>
				<Switch>
					<Route path="/mood_tracker" component={MoodTacker} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
