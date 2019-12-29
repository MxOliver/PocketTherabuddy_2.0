import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const Nav = styled.ul`
	list-style: none;
	flex-direction: row;
	display: flex;
	justify-content: space-evenly;
	margin-top: 1em;
	top: 0;
	padding: 1em;
`;

const NavLink = styled.a`
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

const NavItem = styled.li`
	width: fit-content;
	margin: 0;
	padding-left: 1.5em;
	padding-right: 1.5em;
`;

const NavBar = ({ currentUser }) => {
	return (
		<NavContainer>
			<Nav>
				<NavItem>
					<NavLink href="/mood_tracker">Mood Tracker</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/habit_tracker">Habit Tracker</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/toolbox">ToolBox</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/workbook">Workbook</NavLink>
				</NavItem>
				{currentUser && (
					<NavItem>
						<NavLink href={`/account/${currentUser.id}`}>Account</NavLink>
					</NavItem>
				)}
			</Nav>
		</NavContainer>
	);
};

export default NavBar;
