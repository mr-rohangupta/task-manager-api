const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    console.log("Initial value of req.user", req.user);
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded::", decoded);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    //console.log("User Details::", user);
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
    //console.log("Value after ::", req.user);
  } catch (e) {
    res.status(401).send({ error: "please authenticate" });
  }
};

module.exports = auth;
