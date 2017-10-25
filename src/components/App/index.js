import React from "react";
import { connect } from "react-redux";
import Activities from "../Activities";
import AddActivity from "../AddActivity";
import * as actions from "../../actions";
import { AppContainer, PageWrapper } from "../Layout";
import AppBar from "../AppBar"

const App = ({ addActivity }) => {
	return (
		<AppContainer>
			<PageWrapper>
				<AppBar title="TinyProgress" action={<AddActivity addActivity={addActivity} />}></AppBar>
				<Activities />
			</PageWrapper>
		</AppContainer>
	);
};

const mappedActions = dispatch => {
	return {
		addActivity: (id, title) => dispatch(actions.addActivity(id, title))
	};
};

export default connect(null, mappedActions)(App);
