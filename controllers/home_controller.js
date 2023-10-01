const projectList = [
  {
    name: "Java Project",
    description: "This project based on java",
    Author: "Mangesh Singh",
  },
  {
    name: "Python Project",
    description: "This project based on python",
    Author: "Neha Singh",
  },
  {
    name: "Javascript Project",
    description: "This project based on Javascript",
    Author: "Ajay Singh",
  },
];

module.exports.home = function (req, res) {
    return res.render("home", {
    title: "Issue Tracker",
    project_list: projectList,
  });
}