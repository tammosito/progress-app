import React from "react";
import { connect } from 'react-redux'
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const Activities = ({ activities }) => {
	return (
		<div>
			{activities.map(activity => {
				return (
					<List key={activity.id} subheader={<ListSubheader>Your Activities</ListSubheader>}>
						<ListItem button>
							<Avatar>
								J
							</Avatar>
							<ListItemText primary={activity.title} secondary="Last activity: 4 hours ago" />
						</ListItem>
					</List>
				)
			})}
		</div>
	)
}

const props = state => {
	return {
		activities: state.activities
	}
}

const actions = {

}

export default connect(props, actions)(Activities)
	