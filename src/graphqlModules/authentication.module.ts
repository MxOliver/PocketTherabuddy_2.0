import { GraphQLModule } from "@graphql-modules/core";

const resolvers = {
	Query: {
		currentUser: (root, args, context) => context.currentUser
	}
};

const AuthenticationModule = new GraphQLModule({
	resolvers,
	context: async ({ req }) => {
		let authToken = "mock token";
		let currentUser = "mock user";

		return {
			req,
			authToken,
			currentUser
		};
	}
});

module.exports = AuthenticationModule;
