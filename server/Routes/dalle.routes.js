const express = require("express");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route("/").post(async (req, res) => {
  const { prompt } = req.body;

  const response = await openai.createImage({
    prompt,
    n: 1,
    size: "1024x1024",
    response_format: "b64_json",
  });

  const image = response.data.data[0].b64_json;

  res.status(200).json({ photo: image });
});

module.exports = router;
