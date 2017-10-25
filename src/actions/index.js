export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const addActivity = (title, unit) => ({
	type: ADD_ACTIVITY,
	payload: {
		title,
		unit
	}
});

export const REMOVE_ACTIVITY = "REMOVE_ACTIVITY";
export const removeActivity = (id) => ({
	type: REMOVE_ACTIVITY,
	payload: {
		id
	}
});

export const ADD_ACTIVITY_ITEM = "ADD_ACTIVITY_ITEM";
export const addActivityItem =  (activityId, value, unit) => ({
	type: ADD_ACTIVITY_ITEM,
	payload: {
		activityId,
		value,
		unit,
		itemId: Date.now(),
		date: Date.now(),
	}
});
