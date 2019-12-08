import { execute, graphql } from "graphql";
import { MoodProvider } from "./mood.provider";
const gql = require("graphql-tag");
const MoodModule = require("./mood.module");

describe("MoodModule", () => {
	it("Field Resolver for Query: getMood", async () => {
		const { schema, injector } = MoodModule;

		injector.provide({
			provide: MoodProvider,
			overwrite: true,
			useValue: {
				getMoodByType: (type: string) => ({ type: "AFRAID" })
			}
		});

		const result = await execute({
			schema,
			document: gql`
				query GetMood($type: String) {
					mood(type: $type) {
						type
						id
					}
				}
			`
		});

		expect(result.errors).toBeFalsy();
		expect(result.data["mood"]["type"]).toBe("AFRAID");
	});

	it("field resolver for Mutation: createMood", async () => {
		const { schema, injector } = MoodModule;

		injector.provide({
			provide: MoodProvider,
			overwrite: true,
			useValue: {
				createMood: () => ({ type: "BRAVE", intensity: 5 })
			}
		});

		const result = await execute({
			schema,
			document: gql`
				mutation CreateMood($input: MoodInput) {
					createMood(input: $input) {
						type
						id
					}
				}
			`,
			variableValues: {
				input: {
					type: "BRAVE",
					intensity: 5
				}
			}
		});

		expect(result.errors).toBeFalsy();
		expect(result.data["createMood"]["type"]).toBe("BRAVE");
	});
});
