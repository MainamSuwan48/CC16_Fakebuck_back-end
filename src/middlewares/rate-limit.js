const { rateLimit } = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  limit: 100,
  message: "Too many requests from this IP, please try again after a day",
});
