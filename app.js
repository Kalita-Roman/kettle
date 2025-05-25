const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "XXX" });
});

app.get("/dmp6jh-3000", (req, res) => {
  res.json({ message: "dmp6jh-3000" });
});

app.get("/*", (req, res) => {
  res.json({ message: "The rest" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
