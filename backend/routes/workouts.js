const express = require("express");
const {
	getWorkouts,
	getWorkout,
	createWorkout,
	deleteWorkout,
	updateWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

// get all workouts
router.get("/", getWorkouts);

// get a single workout
router.get("/:id", getWorkout);

// post a single workout
router.post("/", createWorkout);

// delete a single workout
router.delete("/:id", deleteWorkout)

// update (patch) a single workout
router.patch("/:id", updateWorkout)

module.exports = router;
