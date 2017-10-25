import React from "react";
import { connect } from "react-redux";
import find from "ramda/src/find";
import propEq from "ramda/src/propEq";
import { AppContainer, PageWrapper } from "../Layout";

const ActivityDetail = ({ match, activity }) => (
	<AppContainer>
		<PageWrapper>
			detail id: {match.params.id} <br />
			{activity.title}
		</PageWrapper>
	</AppContainer>
);

const props = (state, props) => {
	return {
		activity: find(
			propEq("id", Number(props.match.params.id)),
			state.activities
		)
	};
};

const actions = dispatch => {
	return {};
};

export default connect(props, actions)(ActivityDetail);
