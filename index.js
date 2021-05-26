require("dotenv/config");
const express = require("express");

const Port = process.env.PORT || 3000;
const app = express();

const { Status } = require("./src/Constants.json");

app.listen(Port, "0.0.0.0", () => {
  console.log(`Working with port: ${Port}`);
});

const ApiRoute = require("./src/api")(app);
app.use("/", ApiRoute);

app.get("*", async (req, res) => {
  return res.json({ status: Status.ERROR, message: "Page not found" });
});
