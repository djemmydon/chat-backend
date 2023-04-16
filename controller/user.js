import User from "../model/userMode.js";

export const getUser = async (req, res) => {
  const userId = req.query.userId;
  const userName = req.query.userName;

  try {
    const user = userId
      ? await User.findById(userId)
      : await user.findOne({ userName: userName });
    const { password, updatedAt, ...other } = user._doc;

    res.status(200).json(other);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
