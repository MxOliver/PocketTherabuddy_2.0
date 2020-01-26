import React from "react";
import Button, { ButtonGroup, Theme as ButtonTheme } from "@atlaskit/button";
import { isEmpty } from "lodash-es";

import { ErrorMessage } from "@atlaskit/form";

const customTheme = (currentTheme, themeProps) => {
	const { buttonStyles, spinnerStyles } = currentTheme(themeProps);
	return {
		buttonStyles: {
			...buttonStyles,
			background: themeProps.isSelected ? "#045fd1" : buttonStyles.background
		},
		spinnerStyles
	};
};

const ButtonSelect = ({ value, ...props }) => {
	if (isEmpty(props.options)) return null;
	const { getOptionLabel = option => option.label } = props;

	return (
		<>
			{props.label ? (
				<label htmlFor="button_group_label">{props.label}</label>
			) : (
				""
			)}
			<div
				className={props.className}
				name={props.name}
				data-testid={"button-select"}
				style={{ marginTop: "1em" }}
			>
				<ButtonGroup appearance={props.appearance} id="button_group_label">
					{props.options.map((option, index) => {
						return (
							<ButtonTheme.Provider
								value={customTheme}
								key={`${index}::button`}
							>
								<Button
									key={index}
									onClick={() =>
										props.handleChange({ target: { value: option } })
									}
									isSelected={value && option.value === value}
									onBlur={props.onBlur}
								>
									{getOptionLabel(option)}
								</Button>
							</ButtonTheme.Provider>
						);
					})}
				</ButtonGroup>
				{props.error && props.touched && (
					<ErrorMessage>{props.error}</ErrorMessage>
				)}
			</div>
		</>
	);
};

ButtonSelect.defaultProps = {
	options: []
};

export default ButtonSelect;
