const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");
const musican = require("../db/routes/musician");
const port = 3000;




app.use("/musicians", musican);

app.use("/musicians/:id", musican);

app.use("/musicians", musican);

app.use("/musicians/:id", musican);

app.use("/musicians/:id", musican);
  




module.exports = app;