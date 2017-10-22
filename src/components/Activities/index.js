import React from "react";
import { connect } from "react-redux";
import ListSubheader from "material-ui/List/ListSubheader";
import List, { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import * as actions from "../../actions"

const Activities = ({ activities, addActivity }) => {
	return (
		<div>
			{activities.map(activity => {
				return (
					<List
						key={activity.id}
						subheader={
							<ListSubheader onClick={() => addActivity(42, "hellllooo")}>Your Activities</ListSubheader>
						}
					>
						<ListItem button>
							<Avatar>J</Avatar>
							<ListItemText
								primary={activity.title}
								secondary="Last activity: 4 hours ago"
							/>
						</ListItem>
					</List>
				);
			})}
		</div>
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
	}
};

export default connect(props, mappedActions)(Activities);
