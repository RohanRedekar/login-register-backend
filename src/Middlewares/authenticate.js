const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "ideacart", function (err, decoded) {
      if (err) return reject(err);
      return resolve(decoded);
    });
  });
};

const authenticate = async (req, res) => {
  if (!req.headers.authentication)
    return res.status(400).send({
      message: "Authorization token not found or incorrect",
      auth: false,
    });

  if (!req.headers.authentication.startsWith("Bearer "))
    return res.status(400).send({
      message: "Authorization token not found or incorrect",
      auth: false,
    });

  const token = req.headers.authentication.trim().split(" ")[1];

  let decoded;
  try {
    decoded = await verifyToken(token);
    return res.status(200).send({ user: decoded.user, auth: true });
  } catch (err) {
    return res.status(400).send({
      message: "Authorization token not found or incorrect",
      auth: false,
    });
  }
};

module.exports = authenticate;
