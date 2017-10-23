import React from "react";
import { connect } from "react-redux";
import find from "ramda/src/find";
import propEq from "ramda/src/propEq";

const ActivityDetail = ({ match, activity }) => (
	<div>
		detail id: {match.params.id} <br/>
		{activity.title}
	</div>
);

const props = (state, props) => {
	return {
		activity: find(propEq("id", Number(props.match.params.id)), state.activities)
	};
};

const actions = dispatch => {
	return {
	};
};


export default connect(props, actions)(ActivityDetail);
