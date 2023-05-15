import mongoose from "mongoose";

//definir propriedade para todos campos strings dos modelos
mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor.trim() !== "",
  message: ({path }) => `O campo ${path} foi fornecido em branco`,
});
