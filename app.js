const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.options("*", cors());

/* Router configuration */
const REST_API_ROOT = "/api";
app.use(REST_API_ROOT, require("./router/index"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
