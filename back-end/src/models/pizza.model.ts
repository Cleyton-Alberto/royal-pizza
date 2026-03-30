import mongoose, { Schema } from "mongoose";

const pizzaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  category: {
    type: String,
    required: true,
  },

  flavor: {
    type: String,
    required: true,
  },

  ingredients: {
    type: [String],
  },

  border: {
    type: String,
    required: true,
  },

  size: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  img_url: {
    type: String,
    required: true,
  },
});

export const PizzaModel = mongoose.model("Pizza", pizzaSchema);
