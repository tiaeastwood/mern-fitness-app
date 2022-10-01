import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
	switch (action.type) {
		case "SET_WORKOUTS":
			return {
				workouts: action.payload,
			};
		case "CREATE_WORKOUT":
			return {
				workouts: [action.payload, ...state.workouts],
			};
		case "DELETE_WORKOUT":
			return {
				workouts: state.workouts.filter((w) => w._id !== action.payload._id),
			};
		default:
			return state;
	}
};

export const WorkoutsContextProvider = ({ children }) => {
	// gets back a state value and function to update state value
	const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

	return (
		<WorkoutsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</WorkoutsContext.Provider>
	);
};

// This context provider wraps the root App component (in index.js)
// App is then a child component
// the value in the WorkoutContext.Provider is available to all components in the App
