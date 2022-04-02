const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT | 8000;

const staticpath = path.join(__dirname, "../public");
template_path = path.join(__dirname, "../templates/views");
partial_path = path.join(__dirname, "../templates/partials");

app.use(express.static(staticpath));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error", {
    errormsg: "Opps! Page Not Found,please go back to home",
  });
});

app.listen(port, () => {
  console.log("8000 port listening");
});
