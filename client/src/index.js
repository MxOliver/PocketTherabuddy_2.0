import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./UIComponents/theme";

export const client = new ApolloClient({
	uri: process.env.REACT_APP_APOLLO_URI
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={mainTheme}>
			<App />
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById("root")
);
