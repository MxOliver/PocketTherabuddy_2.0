import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MOOD_TYPES } from "../../graphql/queries";
import Column from "../../UIComponents/column";
import Spinner from "@atlaskit/spinner";
import FormTabs from "./Tabs";

const Form = (...formBag) => {
	const { loading, data, error } = useQuery(GET_MOOD_TYPES);

	if (loading) return <Spinner size="small" />;

	return (
		<>
			<Column
				alignItems="left"
				width="100%"
				gapLeft="1em"
				gapRight="1em"
				minHeight="25em"
			>
				<FormTabs formBag={formBag} data={data} />
			</Column>
		</>
	);
};

export default Form;
