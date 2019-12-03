import { ApolloServer } from "apollo-server-express";
const express = require("express");
const AppModules = require("./graphqlModules");
const PORT = 3000;

const { schema, context } = AppModules;

const app = express();

const server = new ApolloServer({
	schema,
	context,
	introspection: true
});

server.applyMiddleware({ app });

app.listen({ PORT }, () => {
	console.log(`server ready at ${PORT}`);
});
