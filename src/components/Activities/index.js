import React from "react";
import { connect } from "react-redux";
import head from "ramda/src/head";
import prop from "ramda/src/prop";
import ListSubheader from "material-ui/List/ListSubheader";
import List, {
	ListItem,
	ListItemText,
	ListItemSecondaryAction
} from "material-ui/List";
import DeleteIcon from "material-ui-icons/Delete";
import IconButton from "material-ui/IconButton";
import Avatar from "material-ui/Avatar";
import * as actions from "../../actions";
import toMaterialStyle from "material-color-hash";
import { Link } from "react-router-dom";
import moment from "moment";

const Activities = ({ activities, addActivity, removeActivity }) => {
	return (
		<List>
			<ListSubheader disableSticky>Your Progress</ListSubheader>
			{activities.map(activity => {
				const timeAgo = prop("date", head(activity.items)) || null;
				const timeAgoText = timeAgo
					? moment(timeAgo).fromNow()
					: "Add events to start";

				return (
					<ListItem
						button
						component={Link}
						to={`/detail/${activity.id}`}
						key={activity.id}
					>
						<Avatar style={toMaterialStyle(activity.title)}>
							{activity.title.slice(0, 1)}
						</Avatar>
						<ListItemText
							primary={activity.title}
							secondary={timeAgoText}
						/>
						<ListItemSecondaryAction>
							<IconButton aria-label="Delete" style={{color: "rgba(255, 255, 255, 0.9)"}}>
								<DeleteIcon
									onClick={() => removeActivity(activity.id)}
								/>
							</IconButton>
						</ListItemSecondaryAction>
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
		addActivity: (id, title) => dispatch(actions.addActivity(id, title)),
		removeActivity: id => dispatch(actions.removeActivity(id))
	};
};

export default connect(props, mappedActions)(Activities);
