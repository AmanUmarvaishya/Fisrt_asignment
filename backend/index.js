const connectToMongo = require("./MongoDBConnection");
const express = require("express");
const app = express();
const Authroute = require("./routes/auth");
const authRouter = require("./routes/auth");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
connectToMongo();

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("ok");
});
app.use(express.json());
app.use("/api/auth", Authroute);
app.use("api/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
