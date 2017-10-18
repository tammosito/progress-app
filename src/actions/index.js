export const ADD_ACTIVITY = "ADD_ACTIVITY"
export const addActivity = (text, id) => ({
	type: ADD_ACTIVITY,
	id,
	text
  })