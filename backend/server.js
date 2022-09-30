import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
	res.json({ msg: "welcome to the app" });
});

app.listen(process.env.PORT, () => {
	console.log(`Now listening on port ${process.env.PORT} !!!`);
});

process.env;
