const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    name: "Joseph Mendoza",
    likes: ["Node", "Python", "Machine Learning", "MongoDB"],
    age: 26
  });
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/bad", (req, res) => {
  res.status(400).json({
    errorMessage: "This is a bad url"
  });
});
app.listen(3000, () => console.log("Listening on port 3000"));
