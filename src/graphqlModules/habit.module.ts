import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { HabitProvider } from "./habit.provider";
const gql = require("graphql-tag");
const authenticationModule = require("./authentication.module");

const typeDefs = gql`
	type Query {
		habits: [Habit]
		habit(name: String): Habit
		userHabits: [Habit]
	}
	type Habit {
		id: String
		name: String!
		userId: Int
		duration: Int
		createDate: String
		updateDate: String
	}
	input HabitInput {
		name: String!
		userId: Int
		duration: Int
		createDate: String
		updateDate: String
	}
	type Mutation {
		createHabit(input: HabitInput): Habit
		updateHabit(id: String, input: HabitInput): Habit
		deleteHabit(id: String): Habit
	}
`;

const HabitModule = new GraphQLModule({
	imports: [authenticationModule],
	providers: [HabitProvider],
	typeDefs,
	resolvers: {
		Query: {
			habits: (root, args, { injector }: ModuleContext) =>
				injector.get(HabitProvider).getHabits(),
			habit: (root, { name }, { injector }: ModuleContext) =>
				injector.get(HabitProvider).getHabitByName(name),
			userHabits: (root, args, { currentUser, injector }: ModuleContext) =>
				injector.get(HabitProvider).getHabitsByUser(currentUser.id),
			createHabit: (
				root,
				{ input: attrs },
				{ currentUser: { id }, injector }: ModuleContext
			) => injector.get(HabitProvider).createHabit(id, { ...attrs }),
			updateHabit: (root, { id, input: attrs }, { injector }: ModuleContext) =>
				injector.get(HabitProvider).updateHabit(id, { ...attrs }),
			deleteHabit: (
				root,
				{ id },
				{ currentUser: { id: userId }, injector }: ModuleContext
			) => injector.get(HabitProvider).deleteHabit(id, userId)
		}
	}
});

module.exports = HabitModule;
