const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/issue_tracker", {
  family: 4,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to database"));

db.once("open", function () {
  console.log("Connection successfull to Database :: Mongodb");
});

module.exports = db;
