import * as actions from "../actions";

const activities = (state = [], action) => {
	switch (action.type) {
		case actions.ADD_ACTIVITY:
			return [
				...state,
				{
					id: Date.now(),
					title: action.payload.title,
					unit: action.payload.unit,
					items: []
				}
			]
		case actions.REMOVE_ACTIVITY:
			return state.filter(activity => activity.id !== action.payload.id)
		case actions.ADD_ACTIVITY_ITEM:
			return state;
		default:
			return state;
	}
};

export default activities;
