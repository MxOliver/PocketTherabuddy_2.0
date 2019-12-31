import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
const express = require("express");
const ormConfig = require("../ormconfig.js");
const AppModules = require("./graphqlModules");
import { webAuth } from "./authConfig";

const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const PORT = 3005;

const app = express();

const jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: "https://dev-oliver.auth0.com/.well-known/jwks.json"
	}),
	audience: "pockettherabuddy_api",
	issuer: "https://dev-oliver.auth0.com/",
	algorithms: ["RS256"]
});

app.use(jwtCheck);

const server = new ApolloServer({
	modules: [AppModules],
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
