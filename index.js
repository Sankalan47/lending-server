const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const formRoutes = require("./routes/routes");
const app = express();
const pdf = require("html-pdf");
const pdfTemplate = require("./documents/document");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

mongoose.connect("mongodb://localhost:27017/form", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.get("/", (req, res) => res.send("Hello World!"));
app.use(formRoutes);
app.listen(8080, () => {
  console.log("Server is running at port 8080");
});
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port port!`))
