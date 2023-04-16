import { Message } from "../model/messageModel.js";
import { pusher } from "../pusher.js";

export const sendMessage = async (req, res) => {
  try {
    const datas = new Message(req.body);

    const save = await datas.save();

    pusher.trigger("chat", "message", req.body);
    res.status(201).json(save);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const message = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
