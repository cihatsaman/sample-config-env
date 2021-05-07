import * as dotenv from "dotenv";
dotenv.config({
  path: "./config.env",
});

export default {
  port: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
};
