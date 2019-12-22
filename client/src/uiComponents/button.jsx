import styled from "styled-components";
import React from "react";

export const ButtonOutline = styled.a.attrs(props => ({
	bgColor: "transparent",
	color: "white"
}))`
	padding-left: 0.1em;
	padding-right: 0.1em;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	background-color: ${props => props.bgColor};
	width: ${props => props.width};
	min-width: 8em;
	color: ${props => props.color};
	border: 2px solid ${props => props.color};
	margin-top: ${props => props.gapTop};
	margin-bottom: ${props => props.gapBottom};
	margin-left: ${props => props.gapLeft};
	margin-right: ${props => props.gapRight};
	alignitems: center;
	text-decoration: none;
	:hover {
		color: ${props => props.theme.colors.mosaic};
		background-color: white;
		border: 2px solid white;
	}
	:focus {
		color: ${props => props.theme.colors.mosaic};
		background-color: white;
		border: 2px solid white;
		outline: none;
		text-decoration: underline;
	}
	letter-spacing: 1px;
	font-size: 24px;
`;

export const ButtonContainer = styled.button.attrs(props => ({
	bgColor: props.primary
		? props.theme.colors.mosaic
		: props.theme.colors.terracotta,
	color: "white",
	accent: props.primary
		? props.theme.colors.mosaicAccent
		: props.theme.colors.terracotta
}))`
	padding-left: 1.5em;
	padding-right: 1.5em;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	background-color: ${props => props.bgColor};
	width: ${props => props.width};
	color: ${props => props.color};
	border: 2px solid ${props => props.accent};
	margin-top: ${props => props.gapTop};
	margin-bottom: ${props => props.gapBottom};
	margin-left: ${props => props.gapLeft};
	margin-right: ${props => props.gapRight};
	alignitems: center;
	:hover {
		color: white;
		background-color: transparent;
		border: 2px solid white;
	}
	:focus {
		outline: none;
		border: 2.5px solid ${props => props.theme.colors.gold};
	}
`;

ButtonContainer.defaultProps = {
	width: "8em"
};

export const ButtonLink = styled.a.attrs(props => ({
	bgColor: props.primary
		? props.theme.colors.terracotta
		: props.theme.colors.gold,
	color: props.primary ? "white" : "black"
}))`
	padding-left: 1.5em;
	padding-right: 1.5em;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	background-color: ${props => props.bgColor};
	color: ${props => props.color};
	border: 2px solid ${props => props.color};
	font-size: 18px;
	letter-spacing: 1px;
	text-decoration: none;
	margin-left: ${props => props.gapLeft};
	margin-right: ${props => props.gapRight};
	margin-top: ${props => props.gapTop};
	margin-bottom: ${props => props.gapBottom};
	alignitems: center;
	:hover {
		color: ${props => props.bgColor};
		background-color: transparent;
		border: 2px solid ${props => props.bgColor};
	}
	:focus {
		outline: none;
		border: 2.5px solid ${props => props.theme.colors.blueDark};
	}
`;

export const Button = props => {
	return (
		<ButtonOutline {...props}>
			{props.label} {props.icon ? props.icon : ""}
		</ButtonOutline>
	);
};
