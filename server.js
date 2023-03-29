const path = require("path");
const express = require("express");
const port = 3000;
const app = express();

app.use(express.static(__dirname));
app.route("/").get((req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "index.html"));
});

app.route("/cadastro.html").get((req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "cadastro.html"));
});

app.listen(port, () => {
  console.log("run in port 3000");
});