import express from "express";

import UserRoute from "./routes/userRoutes.js";
import PostRoute from "./routes/postRoutes.js";

// creates the app
const app = express();
app.use(express.json());

app.use("/api/v1/users", UserRoute);
app.use("/api/v1/posts", PostRoute);

export default app;

// requests route starts at the app.js file, then passes it to router file, hence router file must be imported here.
