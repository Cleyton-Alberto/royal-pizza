import { Router } from "express";
import {
  createPizza,
  deletePizza,
  getPizzas,
  updatePizza,
} from "../controllers/pizzas.controller.js";

export const pizzaRoutes = Router();

pizzaRoutes.get("/pizzas", getPizzas);

pizzaRoutes.post("/pizzas", createPizza);

pizzaRoutes.patch("/pizzas/:id", updatePizza);

pizzaRoutes.delete("/pizzas/:id", deletePizza);
