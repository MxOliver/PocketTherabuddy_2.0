import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { MoodProvider } from "./mood.provider";
const moodEnumModule = require("./moodEnum.module");
const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		moods: [Mood]
		mood(type: MoodType): Mood
		userMoods(userId: Int): [Mood]
	}
	type Mood {
		id: String
		type: MoodType
		userId: Int
		intensity: Int
		createDate: String
		updateDate: String
		moodEnumId: Int
	}
	input MoodInput {
		type: MoodType
		userId: Int
		intensity: Int
		createDate: String
		updateDate: String
	}
	type Mutation {
		createMood(input: MoodInput): Mood
		updateMood(id: String, input: MoodInput): Mood
		deleteMood(id: String): Mood
	}
`;

const MoodModule = new GraphQLModule({
	imports: [moodEnumModule],
	typeDefs,
	providers: [MoodProvider],
	context: (session, currentContext, ModuleSessionInfo) => {
		debugger;
		console.log(session);
	},
	resolvers: {
		Query: {
			moods: async (_, args, { injector }: ModuleContext) => {
				const moods = await injector.get(MoodProvider).getMoods();

				return moods;
			},
			mood: async (_, { type }, { injector }: ModuleContext) => {
				const mood = await injector.get(MoodProvider).getMoodByType(type);

				return mood;
			},
			userMoods: async (_, { userId }, { injector }: ModuleContext) => {
				const userMoods = await injector
					.get(MoodProvider)
					.getMoodByUser(userId);

				return userMoods;
			}
		},
		Mutation: {
			updateMood: (_, { id, input: attrs }, { injector }: ModuleContext) =>
				injector.get(MoodProvider).updateMood(id, { ...attrs }),
			deleteMood: (
				_,
				{ id },
				{ currentUser: { id: userId }, injector }: ModuleContext
			) => injector.get(MoodProvider).deleteMood(id, userId),
			createMood: async (
				_,
				{ input: { type, intensity } },
				{ currentUser: { id: userId }, injector }: ModuleContext
			) => {
				return await injector
					.get(MoodProvider)
					.createMood({ type, intensity, userId });
			}
		}
	}
});

module.exports = MoodModule;
