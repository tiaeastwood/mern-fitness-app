const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
require("dotenv").config();

// express app
const app = express();

app.use(express.json());
app.use(cors());

// middleware (logs the request and method, then moves onto the next method)
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Now connected to db and listening on port ${process.env.PORT} !!!`);
		});
	})
	.catch((error) => {
		console.log(error);
	});

process.env;
