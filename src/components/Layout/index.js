import styled from "styled-components";

const AppContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	background-color: #4eb0f6;
	background-image: linear-gradient(200deg, #2e83d7, #4eb0f6 75vw);
	color: #fff;
	transition: background-color 0.2s;
	overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
`;

const PageWrapper = styled.div`
	max-width: 640px;
	width: 100%;
`;

export { AppContainer, PageWrapper };
