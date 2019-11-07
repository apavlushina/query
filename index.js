const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);

const router = require("./event/router");
app.use(router);

const port = 4000;
const db = require("./db");
const Model = require("./event/model");

app.get("/", (req, res) => {
  res.send(res);
});
app.listen(port, () => console.log(`Listening on port :${port}!`));
