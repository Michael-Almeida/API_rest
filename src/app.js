import express from "express"; //importa o express
import db from "./config/dbConect.js"; //importando o db
import livros from "./models/Livro.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "erro de conexão"));

db.once("open", () => {
  console.log("Conexão com banco feita com sucesso");
});

const app = express(); //recebe instância do 

app.use(express.json()); //Recurso para interpretar o que chega por post ou put

routes(app)

/* const livros = [
  { id: 1, titulo: "Senhor dos aneis" },
  { id: 2, titulo: "O Hobit" },
]; */

// app.get("/", (req, res) => {
//   res.status(200).send("Curso de node");
// });

// app.get("/livros", (req, res) => {
//   livros.find((err, livros) => {
//     res.status(200).json(livros);
//   });
// });

app.get("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

//função para localizar o livro pelo id
function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id == id);
}

//exportando para que outros arquivos possam utilizar
export default app;

app.delete("/livros/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} excluído com sucesso!`);
});
