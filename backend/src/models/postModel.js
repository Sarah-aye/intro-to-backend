import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 16,
      max: 100,
    },
  },
  {
    timestamps: true,
  },
);

export const Post = mongoose.model("Post", PostSchema);
