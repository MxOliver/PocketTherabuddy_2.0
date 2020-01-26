import { GraphQLModule } from "@graphql-modules/core";
import { uuid } from "uuidv4";

const resolvers = {
	Query: {
		currentUser: (root, args, context) => context.currentUser
	}
};

const AuthenticationModule = new GraphQLModule({
	resolvers,
	context: async ({ req }) => {
		let authToken = "mock token";
		let currentUser = {
			id: "80f807c2-df64-404c-80c5-95d32d5e286a",
			name: "mockUser"
		};

		return {
			req,
			authToken,
			currentUser
		};
	}
});

module.exports = AuthenticationModule;
