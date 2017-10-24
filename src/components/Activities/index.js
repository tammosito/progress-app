import React from "react";
import { connect } from "react-redux";
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
import AddActivity from "../AddActivity";
import toMaterialStyle from "material-color-hash";
import { Link } from "react-router-dom";

const Activities = ({ activities, addActivity, removeActivity }) => {
	return (
		<List>
			<AddActivity addActivity={addActivity} />
			<ListSubheader disableSticky>Your Progress</ListSubheader>
			{activities.map(activity => {
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
							secondary="Last activity: 4 hours ago"
						/>
						<ListItemSecondaryAction>
							<IconButton aria-label="Delete">
								<DeleteIcon onClick={() => removeActivity(activity.id)} />
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
