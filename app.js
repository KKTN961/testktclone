const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to APPLES Youtube Channel @cranky479 Please Subscribe By, --> T Karthick");
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {app,server}