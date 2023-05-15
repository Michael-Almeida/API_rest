import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores } from "../models/index.js";

//Métodos http

class AutorController {
  static listarAutores = async (req, res, next) => {
    try {
      const autorResultado = autores.find();

      req.resultado = autorResultado;
      next();
    
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    const id = req.params.id;
    try {
      const autorResultadoPorId = await autores.findById(id);
      if (autorResultadoPorId !== null) {
        res.status(200).send(autorResultadoPorId);
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
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
      const autorResultado = await autores.findByIdAndUpdate(id, {
        $set: req.body,
      });
      if (autorResultado !== null) {
        res.status(200).send({ message: "Autor atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const excluirAutor = await autores.findByIdAndDelete(id);
      if (excluirAutor !== null) {
        res.status(200).send({ message: "Autor removido com sucesso!" });
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
