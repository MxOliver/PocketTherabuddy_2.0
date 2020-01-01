import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { UserProvider } from "./user.provider";
const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		users: [User]
		userById(id: String): User
		userByEmail(email: String): User
	}
	type User {
		id: String
		name: String
		email: String
		password: String
		salt: String
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
			userById: (root, { id }, { injector }: ModuleContext) =>
				injector.get(UserProvider).getUserById(id),
			userByEmail: (root, { email }, { injector }: ModuleContext) =>
				injector.get(UserProvider).getUserByEmail(email),
			currentUser: async (_, args, { currentUser }: ModuleContext) =>
				currentUser
		},
		Mutation: {
			createUser: (root, { input: attrs }, { injector }: ModuleContext) =>
				injector.get(UserProvider).createUser({ ...attrs }),
			updateUser: (root, { id, input: attrs }, { injector }: ModuleContext) =>
				injector.get(UserProvider).updateUser(id, { ...attrs }),
			deleteUser: (root, { id }, { injector }: ModuleContext) =>
				injector.get(UserProvider).deleteUser(id)
		}
	},
	context: currentUser => {
		return currentUser;
	}
});

module.exports = UserModule;
