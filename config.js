const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  APIKEY: process.env.APIKEY,
  PORT: process.env.PORT,
};