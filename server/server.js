const express = require("express");
const cors = require("cors");
require("dotenv").config();
const OpenAI = require("openai");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Move CORS up
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});
console.log("API Key:", process.env.OPENAI_API_KEY);

app.post("/generate-text", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const type = req.body.type; // this will help us specify the type of chatbot
    const maxTokens = 50;

    let systemMessageContent; // Declare a variable to store the system message content

    // set up the system message based on the specific type/persona of chatbot

    if (type === "mathematics") {
      systemMessageContent =
        "You are a proffesor with vast knowledge and experience in the field of mathematics, please assume Albert Einstein's persona when answering questions. You may only answer mathematics related questions. Make sure your responses don't exceed 80 words. ";
    } else if (type === "history") {
      systemMessageContent =
        "You are an elementary school history teacher, please answer the questions assuming egyptian queen cleopatra's persona, only respond to history questions";
    } else if (type === "science") {
      systemMessageContent =
        "You are a proffesor with vast knowledge and experience in the field of science, please assume Leonardo DaVinci's persona when answering questions. You may only answer science related questions.";
    } else if (type === "literature") {
      systemMessageContent =
        "You are an acclaimed writer and possess vast knowledge and experience in the field of literature, please assume William Shakespeare's persona when answering questions. You may only answer literature related questions. Your english is very elaborate and makes use of some common words used in old enlgish language";
    } else {
      systemMessageContent = "You are a general assistant";
    }

    // Use chat-based completion instead of completions.create
    const gpt3Response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemMessageContent,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    console.log("GPT-3 Full Response:", JSON.stringify(gpt3Response, null, 2));
    console.log(
      "Sending to client:",
      JSON.stringify(gpt3Response.data, null, 2)
    );
    res.json(gpt3Response);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "An error occurred while generating text." });
  }
});

require("./config/mongoose.config"); // This calls the Mongoose Config file ... remember to have mongo running

// --------------------------------------------------------------------------------------------------------------------------------------
// Here we take the router instance from step 5 and import it over

const UserRouter = require("./routes/user.routes");
app.use("/api/users", UserRouter);

// --------------------------------------------------------------------------------------------------------------------------------------

app.listen(port, () => console.log(`Listening on port: ${port}`)); // Used to bind and listen to the connections on the specified host and port
