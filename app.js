// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Welcome to the CI/CD Workshop!</h1>");
});

module.exports = app;

app.get('/time', (req, res) => {
  const now = new Date().toISOString();  // ISO 格式
  res.json({ time: now });
});
