const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;

require("./config/database");

const Case = require("./models/case");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.get("/", async (req, res) => {
  const cases = await Case.find();
  return res.render("index", { cases });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
