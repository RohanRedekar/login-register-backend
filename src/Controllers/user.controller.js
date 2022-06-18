const express = require("express");
const User = require("../Models/user.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    const details = users.map((user) => ({ name: user.name, id: user._id }));
    return res.status(200).send(details);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

// router.post("", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     return res.status(201).send(user);
//   } catch (err) {
//     return res.status(500).send({ error: err.message });
//   }
// });

module.exports = router;
