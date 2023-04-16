import mongoose from "mongoose";

const ConversationModel = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationModel);
export default Conversation;
