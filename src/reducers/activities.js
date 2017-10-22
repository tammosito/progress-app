import * as actions from "../actions";

const reducer = (state = {}, action) => {
	switch (action.type) {
		case actions.ADD_ACTIVITY:
			console.log(state)
			return {
				...state,
				activities: state.activities.concat([{
					id: action.playload.id,
					title: action.payload.title
				}])
			};
		case actions.ADD_ACTIVITY_ITEM:
			return state;
		default:
			return state;
	}
};

export default reducer;
