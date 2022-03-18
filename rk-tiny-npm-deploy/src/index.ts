#!/usr/bin/env node
import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hi there!");
});

app.listen(3005, () => {
  console.log("Listening on 3005");
});
