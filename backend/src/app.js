import express from "express";
import route from "./routes/userRoutes.js";

// creates the app
const app = express();
app.use(express.json());

app.use("/api/v1/users", route);

export default app;

// requests route starts at the app.js file, then passes it to router file, hence router file must be imported here.
