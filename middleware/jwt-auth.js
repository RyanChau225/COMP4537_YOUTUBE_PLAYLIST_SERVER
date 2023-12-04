// Based on:
// https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
const jwt = require("jsonwebtoken");
const config = process.env;
const verifyToken = (req, res, next) => {
  console.log("-------Verifying token------");
  const token = req.query.token || req.body.requestToken;
  console.log(req.query.token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    // if verified, find a user with the token data and return the user
    req.user = decoded.user_id;
    console.log("Token validated for: ");
    console.log(req.user);
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
