import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./UIComponents/theme";
import { Auth0Provider } from "./auth0-config";
import history from "./Utils/history";
import config from "./authconfig.json";

const onRedirectCallback = appState => {
	history.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	);
};

export const client = new ApolloClient({
	uri: process.env.REACT_APP_APOLLO_URI
});

ReactDOM.render(
	<Auth0Provider
		domain={config.domain}
		client_id={config.clientId}
		redirect_uri={window.location.origin}
		onRedirectCallback={onRedirectCallback}
	>
		<ApolloProvider client={client}>
			<ThemeProvider theme={mainTheme}>
				<App />
			</ThemeProvider>
		</ApolloProvider>
	</Auth0Provider>,
	document.getElementById("root")
);
