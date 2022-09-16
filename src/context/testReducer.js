import { TEST_DISPATCH } from "../types";

export default (state, action) => {
	switch (action.type) {
		case TEST_DISPATCH:
			return {
				...state,
				text: action.payload
			}
		default:
			return state;
	}
};