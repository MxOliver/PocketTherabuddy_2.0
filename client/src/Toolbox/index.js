import React from "react";
import Row from "../UIComponents/row";
import Column from "../UIComponents/column";
import styled from "styled-components";
import { device } from "../Utils/deviceBreakpoints";
import { Button } from "../UIComponents/button";
import { mainTheme } from "../UIComponents/theme";

const Heading = styled.h1`
	font-size: 5rem;
`;

const Container = styled.div`
	padding-right: 3em;
	@media ${device.tablet} {
		max-width: 100%;
	}
`;

const ContainerRight = styled.div`
	min-width: 30em;
	min-height: 35em;
	background-color: ${props => props.theme.colors.peach};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const List = styled.ol`
	list-style: none;
	counter-reset: li;
	padding-inline-start: 20px;
	> li::before {
		content: counter(li);
		color: ${props => props.theme.colors.mosaic};
		display: inline-block;
		width: 1em;
		margin-left: -1.5em;
		margin-right: 0.5em;
		text-align: right;
		direction: rtl;
	}
`;

const Item = styled.li`
	font-family: "Merriweather";
	counter-increment: li;
	font-weight: 600;
`;
const Toolbox = () => {
	return (
		<>
			<Row
				gapTop="5em"
				gapLeft="3em"
				gapRight="2em"
				justify-content="space-between"
				style={{ minHeight: "35em" }}
			>
				<Column justifyContent="flex-start" style={{ width: "fit-content" }}>
					<Heading>Coping Strategies</Heading>
					<Container>
						<p>
							<strong>Cope</strong> /kōp/ <em>verb.</em>{" "}
						</p>
						<p>
							To cope is to deal effectively with something that is difficult or
							stressful.
						</p>
						<p>
							Having effective coping strategies can help you manage tough
							emotions and navigate through the ups and downs of life. The
							purpose of this toolkit is to give you a space to learn about the
							various types of coping strategies and create your own
							personalized list of strategies to use whenever you need them.
						</p>

						<List class="article">
							<Item>Emotion-Focused Coping Skills</Item>
							<p>
								Emotion-based coping is helpful when you need to take care of
								your feelings when you either don’t want to change your
								situation or when circumstances are out of your{" "}
								<a
									href="https://www.verywellmind.com/forty-healthy-coping-skills-4586742"
									aria-describedby="footnote-label"
								>
									control.
								</a>
							</p>
							<Item>Problem-Focused Coping Skills</Item>
							<p>
								Problem-based coping is helpful when you need to change your
								situation, perhaps by removing a stressful thing from your{" "}
								<a
									href="https://www.verywellmind.com/forty-healthy-coping-skills-4586742"
									aria-describedby="footnote-label"
								>
									life.
								</a>
							</p>
						</List>
					</Container>
				</Column>
				<Column gapRight="3em">
					<ContainerRight>
						<Button
							bgColor={mainTheme.colors.peach}
							label="Explore Strategies"
							gapBottom="1em"
						/>
						<Button
							bgColor={mainTheme.colors.peach}
							label="My ToolBox"
							gapBottom="5em"
						/>
					</ContainerRight>
				</Column>
			</Row>
		</>
	);
};

export default Toolbox;
