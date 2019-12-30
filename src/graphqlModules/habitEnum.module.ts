import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { HabitEnumProvider } from "./habitEnum.provider";
const gql = require("graphql-tag");

const typeDefs = gql`
	enum HabitType {
		EXERCISE
		SLEEP
		SOCIAL_INTERACTION
		ALONE_TIME
		TIME_OUTSIDE
		HYDRATION
		LEISURE_ACTIVITIES
	}
	type HabitEnum {
		type: HabitType
		id: Int
	}
	type Query {
		habitEnum(type: HabitType): HabitEnum
		habitEnums: [HabitEnum]
	}
`;

const HabitEnumModule = new GraphQLModule({
	typeDefs,
	providers: [HabitEnumProvider],
	resolvers: {
		Query: {
			habitEnum: (root, args, { injector }: ModuleContext) =>
				injector.get(HabitEnumProvider).getHabitEnum(args.type),
			habitEnums: (root, args, { injector }: ModuleContext) =>
				injector.get(HabitEnumProvider).getHabitEnums()
		}
	}
});

module.exports = HabitEnumModule;
