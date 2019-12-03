import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		users: [User]
		user(id: Int): User
	}
	type User {
		id: Int
		name: String
		email: String
		password: String
	}
`;

const UserModule = new GraphQLModule({
	typeDefs
});

module.exports = UserModule;
