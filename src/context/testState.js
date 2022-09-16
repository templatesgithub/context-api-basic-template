import React, { useReducer } from "react";
import testReducer from "./testReducer";
import testContext from "./testContext";
import PropTypes from "prop-types";

const TestState = ({ children }) => {
	const initialState = {
		text: "Hello"
	};

	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useReducer(testReducer, initialState);

	return (
		<testContext.Provider value={{
			text: state.text
		}}>
			{ children}
		</testContext.Provider>
	);
};

TestState.propTypes = {
	children: PropTypes.node.isRequired
};

export default TestState;