import mongoose from "mongoose";

//schema

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "o título do livro é obrigatório"] },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório"],
    autopopulate: { select: "nome" },
  },
  editora: {
    type: String,
    required: [true, "O(a) editor(a) é obrigatório"],
    enum: {
      values: ["Casa do código", "Alura"],
      message: " A editra {VALUE} não é um valor permitido",
    },
  },
  numeroPaginas: {
    type: Number,
    required: [true, "o número de páginas é obrigatório"],
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message:
        "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}",
    },
  },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
