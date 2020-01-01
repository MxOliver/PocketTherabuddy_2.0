import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { createConnection } from "typeorm";
import * as env from "./envConfig";
const express = require("express");
const ormConfig = require("../ormconfig.js");
const AppModules = require("./graphqlModules");
const fs = require("fs");
const path = require("path");
const pub_key = fs.readFileSync(path.resolve(__dirname, "../jwt-key.pub"));
const jwt = require("jsonwebtoken");

const PORT = 3005;

const app = express();

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
			debugger;
			const decode = jwt.verify(token, pub_key, (err, decoded) => {
				if (err) return new AuthenticationError("Invalid Token");

				debugger;
				console.log(decode);
				return decode;
			});
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
