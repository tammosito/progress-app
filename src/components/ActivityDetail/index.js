import React from "react";
import { connect } from "react-redux";
import find from "ramda/src/find";
import propEq from "ramda/src/propEq";
import { AppContainer, PageWrapper } from "../Layout";
import AppBar from "../AppBar";
import AddItem from "../AddItem";
import ListSubheader from "material-ui/List/ListSubheader";
import List, { ListItem, ListItemText } from "material-ui/List";
import ProgessChart from "../ProgessChart";
import * as actions from "../../actions";
import moment from "moment";

const ActivityDetail = ({ match, activity, addActivityItem }) => {
	return (
		<AppContainer>
			<PageWrapper>
				<AppBar
					title="TinyProgress"
					action={
						<AddItem
							addActivityItem={addActivityItem(activity.id)}
							unit={activity.unit}
						/>
					}
					backbutton
				/>
				<List>
					{activity.items.length > 1 && (
						<ProgessChart data={activity.items} />
					)}

					{activity.items.length < 1 ? (
						<ListSubheader disableSticky>
							Add at least two events to see your progress
						</ListSubheader>
					) : (
						<ListSubheader disableSticky>
							Your Progress for <strong>{activity.title}</strong>
						</ListSubheader>
					)}
					{activity.items.map(item => (
						<ListItem key={item.itemId}>
							<ListItemText
								primary={`${item.value} ${item.unit}`}
								secondary={moment(item.date).fromNow()}
							/>
						</ListItem>
					))}
				</List>
			</PageWrapper>
		</AppContainer>
	);
};

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
		addActivityItem: activityId => (value, unit) => {
			dispatch(actions.addActivityItem(activityId, value, unit));
		}
	};
};
export default connect(props, mappedActions)(ActivityDetail);
