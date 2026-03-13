import { Router } from "express";
import {
  RegisterUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

const UserRoute = Router();
UserRoute.post("/register", RegisterUser);
UserRoute.post("/loggin", loginUser);
UserRoute.post("/logout", logoutUser);
export default UserRoute;

// https://localhost:4000/api/v1/users/register
