import mongoose from "mongoose";

//schema

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "o título do livro é obrigatório"] },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "O(a) autor(a) é obrigatório"]
  },
  editora: { type: String, required: [true, "O(a) editor(a) é obrigatório"] },
  numeroPaginas: { type: Number, required: [true, "o número de páginas é obrigatório"] },
});

const livros = mongoose.model("livros", livroSchema);

export default livros;
