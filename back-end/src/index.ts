import express from "express";
import { pizzaRoutes } from "./routes/pizzas.routes.js";
import { connectToDatabase } from "./db.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
const port = 8080;

app.use(express.json());
app.use(pizzaRoutes);
app.use(errorMiddleware);
connectToDatabase();

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
