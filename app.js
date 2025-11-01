const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fs = require("fs");
const morgan = require("morgan");

const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
app.use(bodyParser.json());

const dotenv = require("dotenv");
dotenv.config({ path: `./config.env` });
const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandle shutdown....");
  process.exit(1);
});

app.use(cors());
const PORT = 3004;


const Employee=require('./routes/EmployeeRoutes')

app.use("/employee",Employee)


app.use((req, res, next) => {
  console.log("this is middleware");
  next();
});

app.use(morgan("dev"));



app.use(mongoSanitize());

app.use(xss()); 


app.listen(PORT, (err) => {
  if (!err) {
    console.log("the port listion in 3004");
  } else {
    console.log("errprrr", err);
  }
});


