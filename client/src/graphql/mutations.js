import { gql } from "apollo-boost";

export const CREATE_MOOD = gql`
	mutation CreateMood($input: MoodInput) {
		createMood(input: $input) {
			type
		}
	}
`;
