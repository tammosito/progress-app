export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const addActivity = (title, id) => ({
	type: ADD_ACTIVITY,
	payload: {
		id,
		title
	}
});

export const ADD_ACTIVITY_ITEM = "ADD_ACTIVITY_ITEM";
export const addActivityItem = (date, id) => ({
	type: ADD_ACTIVITY_ITEM,
	payload: {
		id,
		date
	}
});
