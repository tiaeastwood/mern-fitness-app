import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("http://localhost:4000/api/workouts");
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: json });
			}
		};

		fetchWorkouts();
	}, [dispatch]);

	if (!workouts) {
		return <p>Loading...</p>;
	}

	return (
		<div className="home">
			<div className="workouts">
				{workouts &&
					workouts.map((workout, index) => (
						<WorkoutDetails key={workout._id + index} workout={workout}>
							{workout.title}
						</WorkoutDetails>
					))}
			</div>
			<WorkoutForm />
		</div>
	);
};

export default Home;
