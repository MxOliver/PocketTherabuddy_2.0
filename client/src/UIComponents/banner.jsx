import React from "react";
import styled from "styled-components";

const LowerEdge = styled.div`
	text-align: center;
	margin-top: 0;
	background-color: ${props => props.bgColor};
	width: 100%;
	color: white;
	> div > h1 {
		font-size: 5rem;
		margin-top: 0;
		letter-spacing: 3px;
	}
	> div > p {
		font-size: 1.3rem;
		margin: 0 5rem 0 5rem;
	}
	> svg {
		display: block;
	}
`;
const UpperEdge = styled.div`
	margin: 0;
	> svg {
		display: block;
	}
`;

const Banner = ({ heading, body, children, bgColor }) => {
	return (
		<>
			<UpperEdge bgColor={bgColor}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
					<path
						fill={bgColor}
						fill-opacity="2"
						d="M0,224L26.7,229.3C53.3,235,107,245,160,240C213.3,235,267,213,320,213.3C373.3,213,427,235,480,218.7C533.3,203,587,149,640,138.7C693.3,128,747,160,800,154.7C853.3,149,907,107,960,101.3C1013.3,96,1067,128,1120,170.7C1173.3,213,1227,267,1280,272C1333.3,277,1387,235,1413,213.3L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
					></path>
				</svg>
			</UpperEdge>
			<LowerEdge bgColor={bgColor}>
				<div style={{ justifyContent: "center", minHeight: "20em" }}>
					<h1>{heading}</h1>
					<p>{body}</p>
					{children}
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#ffff"
						fill-opacity="2"
						d="M0,224L26.7,229.3C53.3,235,107,245,160,240C213.3,235,267,213,320,213.3C373.3,213,427,235,480,218.7C533.3,203,587,149,640,138.7C693.3,128,747,160,800,154.7C853.3,149,907,107,960,101.3C1013.3,96,1067,128,1120,170.7C1173.3,213,1227,267,1280,272C1333.3,277,1387,235,1413,213.3L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
					></path>
				</svg>
			</LowerEdge>
		</>
	);
};

export default Banner;
