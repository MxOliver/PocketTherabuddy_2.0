import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { IconContext } from "react-icons";

const NavRight = styled.div`
	justify-content: flex-end;
`;

const NavLeft = styled.div`
	justify-content: flex-start;
`;

const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 3em;
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

const NavIcon = styled.a`
	color: black;
	font-size: 20px;
	text-decoration: none;
	padding: 0.5em 0.3em 0 0.3em;
	:hover {
		text-decoration: underline;
	}
	:focus {
		outline: none;
		background-color: ${props => props.theme.colors.peach};
	}
`;

const NavBar = ({ currentUser }) => {
	return (
		<>
			<NavContainer>
				<NavLeft>
					<Nav>
						<NavItem>
							<NavIcon href="/">
								<IconContext.Provider value={{ size: "1.3em", top: "-3em" }}>
									<FaHome />
								</IconContext.Provider>
							</NavIcon>
						</NavItem>
					</Nav>
				</NavLeft>
				<NavRight>
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
						<NavItem>
							<NavLink href="/dashboard">Dashboard</NavLink>
						</NavItem>
						{currentUser && (
							<NavItem>
								<NavLink href={`/account/${currentUser.id}`}>Account</NavLink>
							</NavItem>
						)}
					</Nav>
				</NavRight>
			</NavContainer>
		</>
	);
};

export default NavBar;
