const express = require("express");
const router = express.Router();

// this is to get all workouts
router.get("/", (req, res) => {
	res.json({ msg: "get all workouts" });
});

// get a single workout
router.get("/:id", (req, res) => {
	res.json({ msg: "get a single workout" });
});

// post a single workout
router.post("/", (req, res) => {
	res.json({ msg: "post a single workout" });
});

// delete a single workout
router.delete("/:id", (req, res) => {
	res.json({ msg: "delete a single workout" });
});

// update (patch) a single workout
router.patch("/:id", (req, res) => {
	res.json({ msg: "update a single workout" });
});

module.exports = router;
