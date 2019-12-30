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
	background-color: ${props => props.theme.colors.strawberry};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const Workbook = () => {
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
					<Heading>Workbook</Heading>
					<Container>
						<p>
							<strong>CBT</strong> /cognitive behavioral therapy/{" "}
						</p>
						<p id="article">
							Cognitive behavior therapy (CBT) is an evidence-based approach to
							tackling mental health problems, such as anxiety or depression.
							CBT works by targeting the thoughts and behaviours that are
							maintaining the{" "}
							<a
								href="https://www.ai-therapy.com/blog/cbt-changes-your-brain/"
								aria-describedby="footnote-label"
							>
								problem.
							</a>
						</p>
						<p>
							The amazing thing about CBT is that it changes the brain in very
							real ways. By changing the way you think and behave through CBT
							you are creating and reinforcing more positive neural pathways.
						</p>
						<p>
							This workbook has a library of CBT worksheets and exercises, as
							well as a re-usable form for refraiming specific thoughts.
						</p>
					</Container>
				</Column>
				<Column gapRight="3em">
					<ContainerRight>
						<Button
							bgColor={mainTheme.colors.strawberry}
							label="Explore Exercises"
							gapBottom="1em"
						/>
						<Button
							bgColor={mainTheme.colors.strawberry}
							label="Thought Reframe Worksheet"
							gapBottom="5em"
						/>
					</ContainerRight>
				</Column>
			</Row>
		</>
	);
};

export default Workbook;
