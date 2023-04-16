import Post from "../model/postModel";
import User from "../model/userMode";

export const CreatePost = async () => {
  const { title, image, email } = req.body;

  const user = await findOne({ email });

  try {
    if (!user) {
      res.status(500).json("User Not Found");
      }
      


  } catch (error) {}
};
