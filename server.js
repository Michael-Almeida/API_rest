import "dotenv/config";
import app from "./src/app.js";

//definir uma porta para escutar requisição
const porta = process.env.PORT || 3000; //Porta do ambiente de produção ou 3000

//fazer o link entre servidor e a porta
app.listen(porta, () => {
  console.log(`Servidor escutando em http://localhost:${porta}`);
});
