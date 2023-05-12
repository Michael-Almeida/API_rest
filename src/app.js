/* eslint-disable no-unused-vars */
import express from "express"; //importa o express
import db from "./config/dbConect.js"; //importando o db
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorErros.js";

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
  console.log("Conexão com banco feita com sucesso");
});

const app = express(); //recebe instância do express

app.use(express.json()); //Recurso para interpretar o que é enviado no momento do post ou put

routes(app); //criar root para que as rotas possam ser exportadas

app.use(manipuladorDeErros);

//exportando para que outros arquivos possam utilizar
export default app;
