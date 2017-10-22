export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const addActivity = (title, unit) => ({
	type: ADD_ACTIVITY,
	payload: {
		title,
		unit
	}
});

export const ADD_ACTIVITY_ITEM = "ADD_ACTIVITY_ITEM";
export const addActivityItem = (date, id) => ({
	type: ADD_ACTIVITY_ITEM,
	payload: {
		id,
		value,
		date
	}
});
