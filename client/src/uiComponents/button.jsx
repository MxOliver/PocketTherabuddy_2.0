import styled from "styled-components";
import React from "react";

export const OutlineLink = styled.a.attrs(props => ({
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
	margin: 0.5em;
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

export const ButtonContainer = styled.button`
	padding-left: 0.1em;
	padding-right: 0.1em;
	padding-top: 0.5em;
	padding-bottom: 0.5em;
	margin: 0.5em;
	background-color: ${props => props.theme.colors.mosaic};
	width: ${props => props.width};
	min-width: 8em;
	color: white;
	border: 2px solid ${props => props.theme.colors.mosaic};
	margin-top: ${props => props.gapTop};
	margin-bottom: ${props => props.gapBottom};
	margin-left: ${props => props.gapLeft};
	margin-right: ${props => props.gapRight};
	alignitems: center;
	letter-spacing: 1px;
	font-size: 20px;
	:hover {
		color: ${props => props.theme.colors.mosaic};
		background-color: transparent;
		border: 2px solid ${props => props.theme.colors.mosaic};
	}
	:focus {
		outline: none;
		border: 2.5px solid ${props => props.theme.colors.gold};
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
