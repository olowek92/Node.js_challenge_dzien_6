const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public/zadanie01"));

app.post("/result", (req, res) => {
  const { first, second } = req.body;
  let result = "";
  if (parseInt(first) % parseInt(second) === 0) {
    result = `${first} jest dzielnikiem ${second}`;
  } else {
    result = `${first} nie jest dzielnikiem ${second}`;
  }
  res.send(result);
});

app.listen(3800, (req, res) => {
  console.log("Serwer uruchomiony na porcie 3800");
});
