import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRouter from "./routes/user.route.js";
import getUserRouter from "./routes/getUser.js";
import conversationRouter from "./routes/conversation.route.js";
import followRouter from "./routes/follower.route.js";
import messageRouter from "./routes/message.route.js";

// config

dotenv.config();

const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "500mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "500mb",
    extended: true,
    parameterLimit: 100000,
  })
);
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);

// file storage

// Route with file

//Routes
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/user", getUserRouter);
app.use("/api/v1/conversation", conversationRouter);
app.use("/api/v1/follow", followRouter);
app.use("/api/v1/message", messageRouter);

// Mongoose setup

const PORT = process.env.PORT || 6001;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
