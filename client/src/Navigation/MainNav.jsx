import React from "react";
import NavBar, {
	Nav,
	NavItem,
	NavLink,
	NavContainer
} from "../uiComponents/navigation";
import Logo from "../Logo";
import Row from "../uiComponents/row";

const Navigation = () => {
	return (
		<Row>
			<NavBar>
				<Logo
					width="15em"
					height="15em"
					position="relative"
					left="8em"
					top="1"
				/>
				<NavContainer>
					<Nav>
						<NavItem>
							<NavLink href="/mood_tracker">Mood Tracker</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Habit Tracker</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Coping Skills</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Toolbox</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>Account</NavLink>
						</NavItem>
					</Nav>
				</NavContainer>
			</NavBar>
		</Row>
	);
};

export default Navigation;
