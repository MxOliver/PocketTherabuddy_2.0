import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { createConnection } from "typeorm";
const express = require("express");
const ormConfig = require("../ormconfig.js");
const AppModules = require("./graphqlModules");
import { AuthService } from "./middleware/authentication";
import { UserProvider } from "./graphqlModules/user.provider";

const PORT = 3005;

const app = express();
const authService = new AuthService();

const getTokenFromHeader = req => {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] === "Bearer"
	) {
		return req.headers.authorization.split(" ")[1];
	}
};

const server = new ApolloServer({
	modules: [AppModules],
	context: async ({ req }) => {
		const token = await getTokenFromHeader(req);
		if (!token) {
			throw new AuthenticationError("Not authenticated");
		} else {
			const verfified = await authService.verifyToken(token);

			if (!verfified) throw new AuthenticationError("Invalid token");

			debugger;
			let userProvider = new UserProvider();

			const currentUser = await userProvider.getUserByEmail(
				verfified.claims.email
			);
			return currentUser;
		}
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
