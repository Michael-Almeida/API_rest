import livros from "../models/Livro.js";

//Métodos http

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      
      const listaLivros = await livros.find().populate("autor").exec();
      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultadoPorId = await livros
        .findById(id)
        .populate("autor", "nome")
        .exec();
      res.status(200).send(livroResultadoPorId);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroSalvo = await livro.save();
      res.status(201).send(livroSalvo.toJSON());
    } catch (erro) {
      res;
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndUpdate(id, {
        $set: req.body,
      });
      res.status(200).send({ message: "Livro Cadastrado com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      await livros.findByIdAndDelete(id);

      res.status(200).send({ message: "Livro removido com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;

      const livroResultado = await livros.find({ editora: editora });
      res.status(200).send(livroResultado);
    } catch (erro) {
      next(erro);
    }
  };
}

export default LivroController;
