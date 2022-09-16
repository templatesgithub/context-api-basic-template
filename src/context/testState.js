import React, { useReducer } from "react";
import testReducer from "./testReducer";
import testContext from "./testContext";

const TestState = () => {

	const initialState = {
		text: "Hello"
	}

	const [state, dispatch] = useReducer(testReducer, initialState);

	return (
		<testContext.Provider value={{}}>
			{ children}
		</testContext.Provider>
	);
};

export default TestState;