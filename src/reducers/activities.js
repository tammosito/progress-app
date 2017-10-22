import * as actions from "../actions";

const reducer = (state = [], action) => {
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
		case actions.ADD_ACTIVITY_ITEM:
			return state;
		default:
			return state;
	}
};

export default reducer;
