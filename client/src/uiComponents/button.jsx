import styled from "styled-components";
import React from "react";

const Button = styled.button.attrs(props => ({
	bgColor: props.primary
		? props.theme.colors.bluePrimary
		: props.theme.colors.redLight,
	color: props.primary ? "white" : props.theme.colors.redPrimary
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
	margin-left: ${props => props.gapLeft};
	margin-right: ${props => props.gapRight};
	alignitems: center;
	:hover {
		color: ${props => props.bgColor};
		background-color: transparent;
		border: 2px solid ${props => props.bgColor};
	}
`;

const ButtonContainer = props => {
	return (
		<Button href={props.href} {...props}>
			{props.label} {props.icon ? props.icon : ""}
		</Button>
	);
};

export default ButtonContainer;
