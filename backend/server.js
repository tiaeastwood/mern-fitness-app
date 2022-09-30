const express = require("express")
const workoutRoutes = require("./routes/workouts")
require("dotenv").config()

// express app
const app = express();

// middleware (logs the request and method, then moves onto the next mehod)
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.use("/api/workouts", workoutRoutes);

// app.get("/", (req, res) => {
// 	res.json({ msg: "welcome to the app" });
// });

app.listen(process.env.PORT, () => {
	console.log(`Now listening on port ${process.env.PORT} !!!`);
});

process.env;
