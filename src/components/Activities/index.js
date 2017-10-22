import React from "react";
import { connect } from "react-redux";
import ListSubheader from "material-ui/List/ListSubheader";
import List, { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import * as actions from "../../actions";
import AddActivity from "../AddActivity";

const Activities = ({ activities, addActivity }) => {
	return (
		<List>
			<AddActivity addActivity={addActivity} />
			<ListSubheader disableSticky onClick={() => addActivity("Lose weight", "kg")}>
				Your Progress
			</ListSubheader>
			{activities.map(activity => {
				return (
					<ListItem button key={activity.id}>
						<Avatar>{activity.title.slice(0, 1)}</Avatar>
						<ListItemText
							primary={activity.title}
							secondary="Last activity: 4 hours ago"
						/>
					</ListItem>
				);
			})}
		</List>
	);
};

const props = state => {
	return {
		activities: state.activities
	};
};

const mappedActions = dispatch => {
	return {
		addActivity: (id, title) => dispatch(actions.addActivity(id, title))
	};
};

export default connect(props, mappedActions)(Activities);
