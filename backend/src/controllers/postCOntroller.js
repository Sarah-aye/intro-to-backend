import { Post } from "../models/postModel.js";

// create a post
const CreatePosts = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age)
      return res
        .status(400)
        .json({ message: "missing fields", error: error.message });
    const post = await Post.create({
      name,
      description,
      age,
    });
    return res.status(201).json({ message: "Post successfully created", post });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const GetPosts = async (req, res) => {
  try {
    const getPosts = await Post.find();
    res.status(200).json(getPosts);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const UpdatePost = async (req, res) => {
  try {
    // check if the body of the request is not empty
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "empty request body" });
    }

    // the {new: true} option is deprecated, replaced with {returnDocument: "after"}
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    if (!post)
      return res
        .status(404)
        .json({ message: " post name not found", error: error.message });
    return res.status(200).json({ message: "post updated successfully", post });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const DeletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    return res.status(200).json({ message: "Post successfully deleted" });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export { CreatePosts, GetPosts, UpdatePost, DeletePost };
