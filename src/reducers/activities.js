import * as actions from "../actions";
import find from "ramda/src/find";
import prepend from "ramda/src/prepend";
import append from "ramda/src/append";
import propEq from "ramda/src/propEq";

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
					id: Date.now(),
					title: action.payload.title,
					unit: action.payload.unit,
					items: []
				}, state)
		case actions.REMOVE_ACTIVITY:
			return state.filter(activity => activity.id !== action.payload.id);
		case actions.ADD_ACTIVITY_ITEM:
			return append(
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
