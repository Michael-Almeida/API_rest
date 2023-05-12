import mongoose from "mongoose";

mongoose.connect(process.env.STRING_CONEXAO_DB); //conectando com a string do mongo Atlas

let db = mongoose.connection;

export default db;
