import { gql } from "apollo-boost";

export const CREATE_MOOD = gql`
	mutation CreateMood($input: MoodInput) {
		createMood(input: $input) {
			type
		}
	}
`;

export const ADD_USER = gql`
	mutation CreateUser($input: UserInput) {
		addUser(input: $input) {
			username
			id
		}
	}
`;
