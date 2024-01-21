const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const port = 5000;

app.engine("hbs", handlebars.engine({ extname: ".hbs" }));

app.set("view engine", "hbs");
app.set("views", "./src/views");

app.use("/static",express.static("./src/static"));

app.get("/", (req, res) => {
  res.render("home", {
    layout: false,
  });
});

app.listen(port, () =>
  console.log(`App is running on http://localhost:${port}`)
);
