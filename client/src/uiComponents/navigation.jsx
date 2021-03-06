import styled from "styled-components";
import React from "react";
import { device } from "../Utils/deviceBreakpoints";

export const NavLink = styled.a`
	font-family: "Bebas Neue";
	color: ${props => props.theme.colors.redPrimary};
	font-size: 20px;
	padding: 2px 4px 2px 4px;
	:hover {
		text-decoration: underline;
	}
	:focus {
		outline: none;
		background-color: ${props => props.theme.colors.redLight};
	}
`;

export const NavItem = styled.li`
	width: fit-content;
	margin: 0;
	padding-left: 1.5em;
	padding-right: 1.5em;
`;

export const NavContainer = styled.div`
	display: flex;
	position: relative;
	list-style: none;
	left: -15em;
	top: -4em;
	z-index: 5;
	justify-content: space-evenly;
	align-items: center;
	width: 100vw;
	flex-direction: row;
	background-color: ${props => props.theme.colors.blueLight};
	height: 5em;
`;

const NavBar = styled.div`
	display: flex;
	flex-direction: row;
	background-color: transparent;
	align-items: center;
`;

export const Nav = styled.ul`
	display: flex;
	position: relative;
	list-style: none;
	left: 0;
	top: 0;
	z-index: 9;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	flex-direction: row;
	background-color: ${props => props.theme.colors.blueLight};
	min-height: 3em;
	justify-content: flex-end;
	padding-right: 5em;
`;

const MobileNav = styled.a`
	background-color: ${props => props.theme.colors.blueLight};
	max-width: 5em;
	justify-content: flex-end;
	min-height: 3em;
	z-index: 9;
	display: flex;
	position: relative;
`;

export const MobileNavMenu = () => {
	return <MobileNav id="menu-toggle"></MobileNav>;
};

export default NavBar;
