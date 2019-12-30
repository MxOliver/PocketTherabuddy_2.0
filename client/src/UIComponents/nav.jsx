import styled from "styled-components";

export const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	height: 3em;
`;

export const Nav = styled.ul`
	list-style: none;
	flex-direction: row;
	display: flex;
	justify-content: space-evenly;
	margin-top: 1em;
	top: 0;
	padding: 1em;
`;

export const NavLink = styled.a`
	font-family: "Bebas Neue";
	color: black;
	font-size: 20px;
	text-decoration: none;
	padding: 2px 4px 2px 4px;
	:hover {
		text-decoration: underline;
	}
	:focus {
		outline: none;
		background-color: ${props => props.theme.colors.peach};
	}
`;

export const NavItem = styled.li`
	width: fit-content;
	margin: 0;
	padding-left: 1.5em;
	padding-right: 1.5em;
`;
