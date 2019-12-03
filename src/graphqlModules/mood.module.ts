import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		moods: [Mood]
		mood(name: String): Mood
	}
	type Mood {
		id: Int
		name: String!
		userId: Int
		intensity: Int
		createDate: String
		updateDate: String
	}
`;

const MoodModule = new GraphQLModule({
	typeDefs
});

module.exports = MoodModule;
