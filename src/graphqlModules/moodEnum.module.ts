import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { MoodEnumProvider } from "./moodEnum.provider";
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
		SELFCONFIDENT
		SHAMEFUL
		SKEPTICAL
		WORRIED
	}
	type MoodEnum {
		type: MoodType
		id: Int
	}
	type Query {
		moodEnum(type: MoodType): MoodEnum
		moodEnums: [MoodEnum]
	}
`;

const MoodEnumModule = new GraphQLModule({
	typeDefs,
	providers: [MoodEnumProvider],
	resolvers: {
		Query: {
			moodEnum: (root, args, { injector }: ModuleContext) =>
				injector.get(MoodEnumProvider).getMoodEnum(args.type),
			moodEnums: (root, args, { injector }: ModuleContext) =>
				injector.get(MoodEnumProvider).getMoodEnums()
		}
	}
});

module.exports = MoodEnumModule;
