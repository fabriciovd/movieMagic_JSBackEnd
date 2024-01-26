const express = require("express");
const handlebars = require("express-handlebars");
const routes = require("./routes");

const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/configExpress');

const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);

app.use(routes)

app.listen(port, () =>
  console.log(`App is running on http://localhost:${port}`)
);
