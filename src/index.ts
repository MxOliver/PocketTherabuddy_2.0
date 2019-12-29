import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { createConnection } from "typeorm";
const express = require("express");
const ormConfig = require("../ormconfig.js");
const AppModules = require("./graphqlModules");
import { UserProvider } from "./graphqlModules/user.provider";
const PORT = 3005;

const app = express();

const server = new ApolloServer({
	modules: [AppModules],
	context: async ({ req }) => {
		// const authHeader = req.headers.authorization;
		// if (authHeader && authHeader.startsWith("Bearer ")) {
		// 	try {
		// 		const tokenString = authHeader.substring(7, authHeader.length);
		// 		const user = new UserProvider();
		// 		// const currentUser = user.currentUser(accessToken.claims);
		// 		// return { currentUser };
		// 	} catch (e) {
		// 		throw new AuthenticationError(e.message);
		// 	}
		// } else {
		// 	throw new AuthenticationError(
		// 		"Authentication Error, expecting Bearer Authentication"
		// 	);
		// }
	},
	introspection: true,
	playground: true,
	debug: true
});

server.applyMiddleware({ app });
createConnection(ormConfig).then(() => {
	app.listen({ port: PORT }, () => {
		console.log(`server ready at ${PORT}`);
	});
});
