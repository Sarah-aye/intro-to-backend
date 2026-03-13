import { User } from "../models/userModels.js";

const RegisterUser = async (req, res) => {
  try {
    // basic validation
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "missing fields" });
    }

    // check if user already exists
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create a user
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      loggedIn: false,
    });
    res.status(201).json({
      message: "User created successfully",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email.toLowerCase(),
    });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    // compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    res.status(200).json({
      message: "user loggedIn",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal error message", error: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export { RegisterUser, loginUser, logoutUser };
