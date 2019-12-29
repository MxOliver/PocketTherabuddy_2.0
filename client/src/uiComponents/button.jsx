import styled from "styled-components";
import React from "react";

export const OutlineLink = styled.a.attrs(props => ({
	bgColor: props.primary ? props.theme.colors.mosaic : props.theme.colors.gold,
	color: props.primary ? "white" : "black"
}))`
	padding-left: 0.1em;
	padding-right: 0.1em;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	background-color: "transparent";
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
		color: ${props => props.bgColor};
		background-color: ${props => props.color};
		border: 2px solid ${props => props.color};
	}
	:focus {
		color: ${props => props.bgColor};
		background-color: ${props => props.color};
		border: 2px solid ${props => props.color};
		outline: none;
		text-decoration: underline;
	}
	letter-spacing: 1px;
	font-size: 24px;
`;

export const ButtonContainer = styled.button.attrs(props => ({
	bgColor: props.primary ? props.theme.colors.mosaic : props.theme.colors.gold,
	textColor: props.primary ? "white" : "black",
	accent: props.primary
		? props.theme.colors.gold
		: props.theme.colors.terracotta
}))`
	padding-left: 0.1em;
	padding-right: 0.1em;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	background-color: ${props => props.bgColor};
	width: ${props => props.width};
	min-width: 8em;
	color: white;
	border: 2px solid ${props => props.bgColor};
	margin-top: ${props => props.gapTop};
	margin-bottom: ${props => props.gapBottom};
	margin-left: ${props => props.gapLeft};
	margin-right: ${props => props.gapRight};
	alignitems: center;
	letter-spacing: 1px;
	font-size: 20px;
	:hover {
		color: ${props => props.bgColor};
		background-color: transparent;
		border: 2px solid ${props => props.bgColor};
	}
	:focus {
		outline: none;
		border: 2.5px solid ${props => props.accent};
	}
`;

export const Button = props => {
	return (
		<OutlineLink {...props}>
			{props.label} {props.icon ? props.icon : ""}
		</OutlineLink>
	);
};

export const ButtonSolid = props => {
	return (
		<ButtonContainer {...props}>
			{props.label} {props.icon ? props.icon : ""}
		</ButtonContainer>
	);
};
