import { Router } from "express";
import {
  RegisterUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

const route = Router();
route.post("/register", RegisterUser);
route.post("/loggin", loginUser);
route.post("/logout", logoutUser);
export default route;

// https://localhost:4000/api/v1/users/register
