import express from "express";
import { routes } from "./routes/routes.js";
import { connectToDatabase } from "./db.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(routes);
connectToDatabase();

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
