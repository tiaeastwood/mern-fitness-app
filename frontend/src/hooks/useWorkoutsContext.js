import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
	const context = useContext(WorkoutsContext);

    // if there is no value for the context, throw an error
	if (!context) {
		throw Error(
			"useWorkoutsContext must be used inside a WorkoutsContext Provider",
		);
	}

	return context;
};
