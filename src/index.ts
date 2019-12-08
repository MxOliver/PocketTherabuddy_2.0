import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
const express = require("express");
const ormConfig = require("../ormconfig.js");
const AppModules = require("./graphqlModules");
const PORT = 3005;

const app = express();

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
