import express from "express"; //importa

const app = express(); //recebe instância do express

app.use(express.json()); //Recurso para interpretar o que chega por post ou put

const livros = [
  { id: 1, titulo: "Senhor dos aneis" },
  { id: 2, titulo: "O Hobit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de node");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso");
});

//exportando para que outros arquivos possam utilizar
export default app;
