import type { Request, Response } from "express";
import { PizzaModel } from "../models/pizza.model.js";
import { asyncHandler } from "../utils/async-handler.js";
import { NotFoundError } from "../utils/api-errors.js";

export const getPizzas = asyncHandler(async (req: Request, res: Response) => {
  const pizzas = await PizzaModel.find({});

  res.status(200).json(pizzas);
});

export const createPizza = asyncHandler(async (req: Request, res: Response) => {
  const pizza = await PizzaModel.create(req.body);
  res.status(201).json(pizza);
});

export const updatePizza = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const pizza = await PizzaModel.findByIdAndUpdate(id, req.body, {
    returnDocument: "after",
  });

  if (!pizza) throw new NotFoundError("Pizza não encontrada");

  res.status(200).json(pizza);
});

export const deletePizza = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const pizza = await PizzaModel.findByIdAndDelete(id);

  if (!pizza) throw new NotFoundError("Pizza não encontrada");

  res.status(204).send();
});
