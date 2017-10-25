import React from "react";
import { connect } from "react-redux";
import find from "ramda/src/find";
import propEq from "ramda/src/propEq";
import { AppContainer, PageWrapper } from "../Layout";
import AppBar from "../AppBar";
import AddItem from "../AddItem";
import * as actions from "../../actions";

const ActivityDetail = ({ match, activity, addActivityItem }) => (
	<AppContainer>
		<PageWrapper>
			<AppBar
				title="TinyProgress"
				action={
					<AddItem addActivityItem={addActivityItem(activity.id)} />
				}
				backbutton
			/>
			detail id: {match.params.id} <br />
			{activity.title}
			{activity.items.map(item => (
				<div key={item.itemId}>{item.value}</div>
			))}
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

const mappedActions = dispatch => {
	return {
		addActivityItem: activityId => (value, date) => {
			dispatch(actions.addActivityItem(activityId, value, date));
		}
	};
};
export default connect(props, mappedActions)(ActivityDetail);
