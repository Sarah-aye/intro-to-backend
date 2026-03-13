import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minLength: 1,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,

      minLength: 6,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre("save", async function () {
  // password is hashed only if it has recently been modified.
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// my first time seeing this in action, quite impressive.
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", UserSchema);
