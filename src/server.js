const app = require("./index");
const connect = require("./Configs/db");
require("dotenv").config();
const port = process.env.PORT || 6000;

app.listen(port, async () => {
  try {
    await connect();
    console.log(`Listening on Port ${port}`);
    res.send(`Listening on Port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
