import Conversation from "../model/conversationModel.js";

export const createConversation = async (req, res) => {
  try {
    const newConversation = new Conversation({
      members: [req.body.receiverId, req.body.senderId],
    });

    const saveConversation = await newConversation.save();

    res.status(201).json(saveConversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });

    res.status(200).json(conversation);
  } catch (error) {}
};
