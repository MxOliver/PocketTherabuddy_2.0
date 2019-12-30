import styled from "styled-components";
import React from "react";

export const Article = styled.p`
	counter-reset: footnotes;
	> a[aria-describedby="footnote-label"] {
		counter-increment: footnotes;
		text-decoration: none;
		color: inherit;
		cursor: default;
		outline: none;
	}
	> a[aria-describedby="footnote-label"]::after {
		content: "[" counter(footnotes) "]";
		vertical-align: super;
		font-size: 0.5em;
		margin-left: 2px;
		color: ${props => props.theme.colors.mosaic};
		text-decoration: underline;
		cursor: pointer;
	}
	> a[aria-describedby="footnote-label"]:focus::after {
		outline: thin dotted;
		outline-offset: 2px;
	}
`;

export const Footnote = props => {
	return (
		<a aria-describedby="footnote-label" href="#footnotes">
			{props.children}
		</a>
	);
};
