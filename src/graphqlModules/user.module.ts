import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { UserProvider } from "./user.provider";
const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		users: [User]
		user(id: String): User
	}
	type User {
		id: String
		name: String
		email: String
		password: String
	}
	input UserInput {
		name: String
		email: String
		password: String
	}
	type Mutation {
		createUser(input: UserInput): User
		updateUser(id: String, input: UserInput): User
		deleteUser(id: String): User
	}
`;

const UserModule = new GraphQLModule({
	typeDefs,
	providers: [UserProvider],
	resolvers: {
		Query: {
			users: (root, args, { injector }: ModuleContext) =>
				injector.get(UserProvider).getUsers(),
			user: (root, { id }, { injector }: ModuleContext) =>
				injector.get(UserProvider).getUserById(id),
			createUser: (root, { input: attrs }, { injector }: ModuleContext) =>
				injector.get(UserProvider).createUser({ ...attrs }),
			updateUser: (root, { id, input: attrs }, { injector }: ModuleContext) =>
				injector.get(UserProvider).updateUser(id, { ...attrs }),
			deleteUser: (root, { id }, { injector }: ModuleContext) =>
				injector.get(UserProvider).deleteUser(id)
		}
	}
});

module.exports = UserModule;
