const app = require("./index");
const connect = require("./Configs/db");
const port = 6000;

app.listen(port, async () => {
  try {
    await connect();
    console.log(`Listening on Port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
