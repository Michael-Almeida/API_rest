import autores from "../models/autor.js";

//Métodos http

class AutorController {
  static listarAutores = async (req, res, next) => {
    try {
      const autorResultado = await autores.find();
      res.status(200).send(autorResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    const id = req.params.id;
    try {
      const autorResultadoPorId = await autores.findById(id);
      if (autorResultadoPorId !== null) {
        res.status(200).send(autorResultadoPorId);
      } else {
        res.status(404).send({ message: "Id do Autor não localizado." });
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);
      const salvandoAutor = await autor.save();
      res.status(201).send(salvandoAutor.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, {
        $set: req.body,
      });
      res.status(200).send({ message: "Autor atualizado com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndDelete(id);
      res.status(200).send({ message: "Autor removido com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
