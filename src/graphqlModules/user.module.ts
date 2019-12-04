import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { UserProvider } from "./user.provider";
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
	typeDefs,
	resolvers: {
		Query: {
			users: (root, args, { injector }: ModuleContext) =>
				injector.get(UserProvider).getUsers(),
			user: (root, { id }, { injector }: ModuleContext) =>
				injector.get(UserProvider).getUserById(id)
		}
	}
});

module.exports = UserModule;
