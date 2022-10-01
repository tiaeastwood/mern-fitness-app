import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
	const { dispatch } = useWorkoutsContext();
	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const workout = { title, load, reps };

		const response = await fetch("http://localhost:4000/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setTitle("");
			setLoad("");
			setReps("");
			setError(null);
			setEmptyFields([]);
			console.log("new workout added: ", json);
			dispatch({ type: "CREATE_WORKOUT", payload: json });
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a new workout:</h3>
			<label htmlFor="title">Exercise Title:</label>
			<input
				type="text"
				name="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className={emptyFields.includes("title") ? "error" : ""}
			/>
			<label htmlFor="load">Load:</label>
			<input
				type="number"
				name="load"
				value={load}
				onChange={(e) => setLoad(e.target.value)}
				className={emptyFields.includes("load") ? "error" : ""}
			/>
			<label htmlFor="reps">Reps:</label>
			<input
				type="number"
				name="reps"
				value={reps}
				onChange={(e) => setReps(e.target.value)}
				className={emptyFields.includes("reps") ? "error" : ""}
			/>
			<button type="submit">Submit</button>

			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default WorkoutForm;
