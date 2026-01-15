const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const name ="Karthick Tamilselvan";
app.get("/", (req, res) => {
  res.send(`Welcome to GITHUB to KKTN961 Please follow and support page by, ${name}`);
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {app,server,name}