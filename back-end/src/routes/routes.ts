import { Router } from "express";
import { PizzaModel } from "../models/pizza.model.js";
import { getErrorMessage } from "../middleware/error.js";

// Pizzas Routes

export const routes = Router();

routes.get("/pizzas", async (req, res) => {
  try {
    const pizzas = await PizzaModel.find({});

    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
});

routes.post("/pizzas", async (req, res) => {
  try {
    const pizza = await PizzaModel.create(req.body);

    res.status(201).json(pizza);
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
});

routes.patch("/pizzas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const pizza = await PizzaModel.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    res.status(200).json(pizza);
  } catch (error) {
    res.status(404).send(getErrorMessage(error));
  }
});

routes.delete("/pizzas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const pizza = await PizzaModel.findByIdAndDelete(id);

    res.status(204).json(pizza);
  } catch (error) {
    res.status(404).send(getErrorMessage(error));
  }
});
