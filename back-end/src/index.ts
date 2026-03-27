import express from "express";
import { connectToDatabase } from "./db.js";

const app = express();
const port = 8080;

connectToDatabase();

app.get("/", (req, res) => {
  res.json("Bateu na rota inicial");
});

app.get("/home", (req, res) => {
  res.json("tudo certo bb");
});

app.listen(port);
