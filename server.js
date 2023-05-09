//Criando servidor local com módulo nativo do node
const http = require("http");
//definir uma porta para escutar requisição
const porta = 3000;

//Rotas
const rotas = {
  "/": "Curso de node",
  "/livros": "Entrei na página de livros",
  "/autores": "Listagem de autores",
  "/sobre": "Infos sobre o projeto",
};

//Criar o servidor e o que irá escutar
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end(rotas[req.url]);
});

//fazer o link entre servidor e a porta
server.listen(porta, () => {
  console.log(`Servidor escutando em http://localhost:${porta}`);
});
