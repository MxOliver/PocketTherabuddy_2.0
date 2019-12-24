import React, { memo, useCallback } from "react";
import Textfield from "@atlaskit/textfield";
import Column from "./column";
import { debounce, isUndefined } from "lodash-es";

export const FormInput = memo(props => {
	const { handleBlur = () => {}, handleChange = () => {} } = props;

	const debouncedChange = useCallback(debounce(handleChange, 300), [
		handleChange
	]);

	const persistAndDebounceChange = useCallback(
		event => {
			event.persist();
			debouncedChange(event);
		},
		[debouncedChange]
	);

	const flushAndBlur = useCallback(
		(...args) => {
			debouncedChange.flush();
			return handleBlur && handleBlur(...args);
		},
		[debouncedChange, handleBlur]
	);

	//Performance improvement if uncontrolled component
	const InputHandleChange = isUndefined(props.value)
		? persistAndDebounceChange
		: handleChange;
	const InputHandleBlur = isUndefined(props.value)
		? persistAndDebounceChange
		: flushAndBlur;

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
				name={props.name}
				type={props.type ? props.type : "text"}
				elemAfterInput={props.rightIcon}
				elemBeforeInput={props.leftIcon}
				onChange={InputHandleChange}
				isDisabled={props.isDisabled}
				onBlur={InputHandleBlur}
				onFocus={props.handleFocus}
				defaultValue={props.defaultValue}
				value={props.value}
				isRequired={props.isRequired}
			/>
		</Column>
	);
});
