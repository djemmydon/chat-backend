import User from "../model/userMode.js";

export const follow = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.param)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });

        res.status(200).json("You started following");
      } else {
        res.status(500).json("You Already following this user");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

export const getFollower = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.following.map((followsId) => {
        return User.findById(followsId);
      })
    );

    let friendList = [];

    friends.map((item) => {
      const { _id, userName, email } = item;

      friendList.push({ _id, userName, email });
    });

    res.status(200).json(friendList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
