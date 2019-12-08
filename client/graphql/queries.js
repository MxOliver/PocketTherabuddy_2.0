import { gql } from "apollo-boost";

export const GET_MOOD_BY_TYPE = gql`
	query GetMood($type: String) {
		mood(type: $type) {
			type
			id
			userId
			intensity
			createDate
			updateDate
		}
	}
`;

export const GET_MOODS = gql`
	query GetMood {
		moods {
			type
			id
			userId
			intensity
			createDate
			updateDate
		}
	}
`;
