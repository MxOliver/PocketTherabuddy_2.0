import { GraphQLModule, ModuleContext } from "@graphql-modules/core";
import { SkillProvider } from "./skill.provider";
const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		skills: [Skill]
		skill(name: String): Skill
		userSkills(userId: Int): [Skill]
	}
	type Skill {
		id: String
		name: String!
		userId: Int
		duration: Int
		createDate: String
		updateDate: String
	}
	input SkillInput {
		name: String!
		userId: Int
		duration: Int
		createDate: String
		updateDate: String
	}
	type Mutation {
		createSkill(input: SkillInput): Skill
		updateSkill(id: String, input: SkillInput): Skill
		deleteSkill(id: String): Skill
	}
`;

const SkillModule = new GraphQLModule({
	typeDefs,
	providers: [SkillProvider],
	resolvers: {
		Query: {
			skills: (root, args, { injector }: ModuleContext) =>
				injector.get(SkillProvider).getSkills(),
			skill: (root, { name }, { injector }: ModuleContext) =>
				injector.get(SkillProvider).getSkillByName(name),
			userSkills: (root, { userId }, { injector }: ModuleContext) =>
				injector.get(SkillProvider).getSkillsByUser(userId),
			createSkill: (
				root,
				{ input: attrs },
				{ currentUser: { id }, injector }: ModuleContext
			) => injector.get(SkillProvider).createSkill(id, { ...attrs }),
			updateSkill: (root, { id, input: attrs }, { injector }: ModuleContext) =>
				injector.get(SkillProvider).updateSkill(id, { ...attrs }),
			deleteSkill: (
				root,
				{ id },
				{ currentUser: { id: userId }, injector }: ModuleContext
			) => injector.get(SkillProvider).deleteSkill(id, userId)
		}
	}
});

module.exports = SkillModule;
