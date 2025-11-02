const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
require("dotenv").config({ path: "./config.env" });

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: [
    "https://employeetaskfrontend.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(morgan("dev"));
app.use(mongoSanitize());
app.use(xss());

// ✅ DB CONNECTION
const DB = process.env.MONGO_URI;
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Backend Working ✅");
});

const Employee = require("./routes/EmployeeRoutes");
app.use("/employee", Employee);

// ✅ MOST IMPORTANT → EXPORT APP (Do NOT app.listen here)
module.exports = app;
