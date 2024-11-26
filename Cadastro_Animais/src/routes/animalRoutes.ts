import { Router } from "express";
import AnimalController from "../controller/AnimalController"; // Certifique-se de que o caminho está correto

const router = Router();

// Rota para criar um novo animal
router.post("/animais", AnimalController.create);

// Rota para listar todos os animais
router.get("/animais", AnimalController.find);

// Rota para buscar um animal pelo ID
router.get("/animais/:id", AnimalController.findById);

// Rota para atualizar um animal pelo ID
router.put("/animais/:id", AnimalController.update);

// Rota para excluir um animal pelo ID
router.delete("/animais/:id", AnimalController.delete);

export default router;
