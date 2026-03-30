import mongoose, { Schema } from "mongoose";

const pizzaSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    flavor: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    ingredients: {
      type: [String],
      default: [],
    },

    border: {
      type: String,
      required: true,
      trim: true,
    },

    size: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    img_url: {
      type: String,
      required: true,
      match: /^https?:\/\/.+\.(jpg|jpeg|png|gif)$/i,
    },
  },
  { timestamps: true },
);

export const PizzaModel = mongoose.model("Pizza", pizzaSchema);
