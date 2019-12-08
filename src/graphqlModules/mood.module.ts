import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { MoodProvider } from "./mood.provider";
const gql = require("graphql-tag");

const typeDefs = gql`
	enum MoodType {
		AFRAID
		AGGRAVATED
		ANGRY
		ANXIOUS
		ASHAMED
		ASSERTIVE
		BRAVE
		CALM
		CAUTIOUS
		CHEERFUL
		COMFORTED
		CONTENTED
		CURIOUS
		DEPRESSED
		EMBARRASSED
		ENERGIZED
		ENVIOUS
		EXCITED
		FURIOUS
		GUILTY
		GRUMPY
		HAPPY
		HOPEFUL
		HUMILIATED
		HURT
		INDIFFERENT
		INSECURE
		IRRITATED
		LONELY
		LOVED
		MAD
		OPTIMISTIC
		OVERWHELMED
		PANICKED
		PEACEFUL
		POSITIVE
		PROUD
		RESTLESS
		REGRETFUL
		RELIEVED
		SAD
		SHAMEFUL
		SKEPTICAL
		WORRIED
	}
	type Query {
		moods: [Mood]
		mood(name: String): Mood
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
	typeDefs,
	providers: [MoodProvider],
	resolvers: {
		Query: {
			moods: (root, args, { injector }: ModuleContext) =>
				injector.get(MoodProvider).getMoods(),
			mood: (root, { name }, { injector }: ModuleContext) =>
				injector.get(MoodProvider).getMoodByName(name),
			userMoods: (root, { userId }, { injector }: ModuleContext) =>
				injector.get(MoodProvider).getMoodByUser(userId),
			createHabit: (
				root,
				{ input: attrs },
				{ currentUser: { id }, injector }: ModuleContext
			) => injector.get(MoodProvider).createMood(id, { ...attrs }),
			updateMood: (root, { id, input: attrs }, { injector }: ModuleContext) =>
				injector.get(MoodProvider).updateMood(id, { ...attrs }),
			deleteMood: (
				root,
				{ id },
				{ currentUser: { id: userId }, injector }: ModuleContext
			) => injector.get(MoodProvider).deleteMood(id, userId)
		}
	}
});

module.exports = MoodModule;
