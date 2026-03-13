import { Router } from "express";
import {
  CreatePosts,
  DeletePost,
  GetPosts,
  UpdatePost,
} from "../controllers/postCOntroller.js";

const PostRoute = Router();

PostRoute.post("/create", CreatePosts);
PostRoute.get("/getposts", GetPosts);
PostRoute.patch("/updateposts/:id", UpdatePost);
PostRoute.delete("/deleteposts/:id", DeletePost);

export default PostRoute;
