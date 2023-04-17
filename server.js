const path = require("path");
const express = require("express");
const port = 3000;
const app = express();
const { router } = require("./router");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(router);

app.use(express.static(__dirname));

// app.route("/").get((req, res) => {
//   res.sendFile(path.resolve(__dirname, "views", "index.html"));
// });

// app.route("/cadastro.html").get((req, res) => {
//   res.sendFile(path.resolve(__dirname, "views", "cadastro.html"));
// });
// app.route("/card.html").get((req, res) => {
//   res.sendFile(path.resolve(__dirname, "views", "card.html"));
// });

app.listen(port, () => {
  console.log("run in port 3000");
});
