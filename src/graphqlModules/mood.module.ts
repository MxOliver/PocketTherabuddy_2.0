import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { MoodProvider } from "./mood.provider";
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
	typeDefs,
	resolvers: {
		Query: {
			moods: (root, args, { injector }: ModuleContext) =>
				injector.get(MoodProvider).getMoods(),
			mood: (root, { name }, { injector }: ModuleContext) =>
				injector.get(MoodProvider).getMoodByName(name)
		}
	}
});

module.exports = MoodModule;
