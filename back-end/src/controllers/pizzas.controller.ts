import type { Request, Response } from "express";
import { PizzaModel } from "../models/pizza.model.js";
import { getErrorMessage } from "../middleware/error.js";

export const getPizzas = async (req: Request, res: Response) => {
  try {
    const pizzas = await PizzaModel.find({});

    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

export const createPizza = async (req: Request, res: Response) => {
  try {
    const pizza = await PizzaModel.create(req.body);

    res.status(201).json(pizza);
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

export const updatePizza = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const pizza = await PizzaModel.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    res.status(200).json(pizza);
  } catch (error) {
    res.status(404).send(getErrorMessage(error));
  }
};

export const deletePizza = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const pizza = await PizzaModel.findByIdAndDelete(id);

    res.status(204).json(pizza);
  } catch (error) {
    res.status(404).send(getErrorMessage(error));
  }
};
