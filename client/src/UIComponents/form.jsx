import React from "react";
import styled from "styled-components";
import Textfield from "@atlaskit/textfield";
import Column from "./column";

export const FormInput = props => {
	return (
		<Column
			gapLeft="2em"
			gapRight="2em"
			gapTop="1em"
			gapBottom="1em"
			justifyContent="center"
			textAlign="left"
		>
			{props.label ? (
				<label htmlFor="form-field" style={{ paddingBottom: "5px" }}>
					{props.label}
				</label>
			) : (
				""
			)}
			<Textfield
				id="form-field"
				onChange={props.handleChange}
				value={props.value}
				name={props.name}
				type={props.type}
			/>
		</Column>
	);
};
