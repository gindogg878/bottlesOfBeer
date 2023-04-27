const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  let count = 99;
  res.send(
    `<h1>${count} Bottles of beer on the wall</h1> <a href="/${
      count - 1
    }">Take one down, pass it around</a>`
  );
});

app.get("/:number_of_bottles", (req, res) => {
  let num = req.params.number_of_bottles;
  res.send(
    num > 0
      ? `<h1>${req.params
          .number_of_bottles--} Bottles of beer on the wall</h1> <a href='/${
          req.params.number_of_bottles
        }'>Take one down, pass it around </h1>`
      : `<h1>No more bottles!!!</h1> <a href='/'> Start over </a>`
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
