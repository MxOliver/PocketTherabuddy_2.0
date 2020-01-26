import { get } from "lodash-es";

export const mapFormValuesToGraphQL = values => {
	return {
		type: get(values, "mood.type.type"),
		intensity: get(values, "mood.intensity")
	};
};
