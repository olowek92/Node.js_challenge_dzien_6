const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public/zadanie02"));
app.use(cookieParser());

app.post("/cookie/set", (req, res) => {
  const { name } = req.body;
  res.cookie("addedName", name, {
    maxAge: 2629800000
  });
  res.send(`Zapisano imię: ${name}`);
});

app.get("/cookie/show", (req, res) => {
  const cookieWithAddedName = req.cookies.addedName;
  res.send(`Zapamiętane imię: ${cookieWithAddedName}`);
});

app.get("/cookie/check", (req, res) => {
  const cookieWithAddedName = req.cookies.addedName;

  cookieWithAddedName === undefined
    ? res.send("Żadne imię nie zostało zapisane!")
    : res.send(`Zapisane imię to: ${cookieWithAddedName}`);
});

app.listen(4100, (req, res) => {
  console.log("Serwer uruchomiony na porcie 4100");
});
