import express from "express";
import config from "./configuration";

const app = express();

app.set("port", config.port);

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(config.port, () => {
  console.log(`App is running on ${config.port}`);
});
