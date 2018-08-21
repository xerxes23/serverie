const express = require("express");
const hbs = require("hbs");

// Initializing Express app
const app = express();

hbs.registerPartials(__dirname + "/views/partials");

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.render("maintenance.hbs");
});

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home",
    welcomeMessage: "Welcome to my website"
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.get("/bad", (req, res) => {
  res.status(400).json({
    errorMessage: "This is a bad url"
  });
});

app.listen(3000, () => console.log("Listening on port 3000"));
