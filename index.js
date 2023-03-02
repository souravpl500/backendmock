const express = require("express");
const app = express();
const cors = require("cors");
const { wordRouter } = require("./routes/words.routes");
const { connection } = require("./config/db");
const { scoreRouter } = require("./routes/scores.routes");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.use("/word", wordRouter);
app.use("/score", scoreRouter);

app.listen(4500, async () => {
  try {
    await connection;
    console.log("Server has been started on 4500");
  } catch (err) {
    console.log(err);
  }
});
