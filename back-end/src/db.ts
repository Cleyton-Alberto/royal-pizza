import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL_DB: string = `mongodb+srv://${username}:${password}@project-royal-pizza.wqplypc.mongodb.net/?appName=project-royal-pizza`;

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(URL_DB);
    // remover quando terminar de desenvolver
    console.log("DB conectado");
  } catch (error) {
    // remover quando terminar de desenvolver
    console.log("Erro ao conectar no DB: ", error);
  }
};
