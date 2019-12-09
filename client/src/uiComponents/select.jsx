import React, { memo } from "react";
import Select from "@atlaskit/select";
import { isEmpty } from "lodash-es";

const FormSelect = memo(props => {
	if (isEmpty(props.options)) return null;
	return (
		<div className={props.className} data-testid="form-select">
			{props.label ? <label htmlFor="dropdown_label">{props.label}</label> : ""}
			<Select
				name={props.name}
				id="dropdown_label"
				isSearchable={props.isSearchable}
				onChange={props.handleChange}
				maxMenuHeight={props.maxMenuHeight}
				className={props.selectType ? props.selectType : ""}
				isMulti={props.isMulti}
				classNamePrefix="react-select"
				defaultValue={props.defaultValue}
				value={props.value}
				options={props.options}
				getOptionLabel={props.getOptionLabel}
				placeholder={props.placeholder}
				isOptionSelected={props.isOptionSelected}
				onBlur={props.handleBlur}
				validationState={props.error && props.touched ? "error" : ""}
			/>
			{/* {props.error && props.touched && (
				///<ErrorMessage>{props.error}</ErrorMessage>
			)} */}
		</div>
	);
});

export default FormSelect;
