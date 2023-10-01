const exp = require("constants");
const express = require("express");
const path = require("path");

const port = 8000;

const app = express();

app.use("/", require("./routes/index"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));

// app.get("/", function (req, res) {
//   //res.send("<h1>Cool, Its an Issue Tracket Project</h1>");

//   return res.render("home", {
//     title: "Issue Tracker",
//     project_list: projectList,
//   });
// });

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is up and running on port: ${port}`);
});
