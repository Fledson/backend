const express = require("express");
const routers = require("./routers");

const app = express();

app.use(express.json());
app.use(routers);

app.listen(3000, () =>
	// eslint-disable-next-line no-console
	console.log("🔥 Server started at http://localhost:3000"),
);
