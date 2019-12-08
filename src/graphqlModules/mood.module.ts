import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { MoodProvider } from "./mood.provider";
const moodEnumModule = require("./moodEnum.module");
const authenticationModule = require("./authentication.module");
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
	imports: [moodEnumModule, authenticationModule],
	typeDefs,
	providers: [MoodProvider],
	resolvers: {
		Query: {
			moods: async (root, args, { injector }: ModuleContext) => {
				const moods = await injector.get(MoodProvider).getMoods();

				return moods;
			},
			mood: async (root, { type }, { injector }: ModuleContext) => {
				const mood = await injector.get(MoodProvider).getMoodByType(type);

				return mood;
			},
			userMoods: async (root, { userId }, { injector }: ModuleContext) => {
				const userMoods = await injector
					.get(MoodProvider)
					.getMoodByUser(userId);

				return userMoods;
			}
		},
		Mutation: {
			updateMood: (root, { id, input: attrs }, { injector }: ModuleContext) =>
				injector.get(MoodProvider).updateMood(id, { ...attrs }),
			deleteMood: (
				root,
				{ id },
				{ currentUser: { id: userId }, injector }: ModuleContext
			) => injector.get(MoodProvider).deleteMood(id, userId),
			createMood: async (
				root,
				{ input: { type, intensity, createDate, updateDate } },
				{ currentUser: { id: userId }, injector }: ModuleContext
			) => {
				const newMood = await injector
					.get(MoodProvider)
					.createMood({ type, intensity, createDate, updateDate, userId });
				return newMood;
			}
		}
	}
});

module.exports = MoodModule;
