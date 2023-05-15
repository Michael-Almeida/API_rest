import express from "express";
import LivrosController from "../controllers/livrosController.js";
import paginar from "../middlewares/paginar.js";

//Para onde será direcionado

const router = express.Router();

router
  .get("/livros", LivrosController.listarLivros, paginar)
  .get("/livros/busca", LivrosController.listarLivroPorFiltro, paginar)
  .get("/livros/:id", LivrosController.listarLivroPorId)
  .post("/livros", LivrosController.cadastrarLivro)
  .put("/livros/:id", LivrosController.atualizarLivro)
  .delete("/livros/:id", LivrosController.excluirLivro);

export default router;
