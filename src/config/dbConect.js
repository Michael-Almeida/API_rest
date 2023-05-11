import mongoose from "mongoose" 

mongoose.connect("mongodb+srv://michael:123@alura.xja8o3s.mongodb.net/alura-node"); //conectando com a string do mongo Atlas

let db = mongoose.connection;

export default db;
