import express, { Application } from "express";
import routes from "./routes";
import { errorHandler } from "./utils/ErrorHandler";
const cors = require("cors");

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use(routes);

// Middleware de erro
app.use(errorHandler);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
