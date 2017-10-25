import * as actions from "../actions";
import find from "ramda/src/find";
import prepend from "ramda/src/prepend";
import propEq from "ramda/src/propEq";
import moment from "moment"

const getNewActivities = (activityId, value, unit, itemId, date, state) => {
	const activity = find(propEq("id", activityId), state);
	const withAddedItem = prepend({activityId, value, unit, itemId, date})(activity.items)
	return {
		...activity,
		items: withAddedItem
	}
};

const activities = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_ACTIVITY:
			return prepend({
					id: moment().valueOf(),
					title: action.payload.title,
					unit: action.payload.unit,
					items: []
				}, state)
		case actions.REMOVE_ACTIVITY:
			return state.filter(activity => activity.id !== action.payload.id);
		case actions.ADD_ACTIVITY_ITEM:
			return prepend(
				getNewActivities(
					action.payload.activityId,
					action.payload.value,
					action.payload.unit,
					action.payload.itemId,
					action.payload.date,
					state
				),
				state.filter(activity => activity.id !== action.payload.activityId)
			)
		default:
			return state;
	}
};

export default activities;
