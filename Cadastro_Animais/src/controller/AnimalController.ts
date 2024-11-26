import { Request, Response } from "express";
import { cadastro as Animal } from "../models/animalSchema"; // Certifique-se de que o caminho está correto

class AnimalController {
  // Criar um novo animal
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { nome, especie, idade, tutor } = req.body;

      if (!nome || !especie || !idade || !tutor) {
        res.status(400).json({ message: "Todos os campos são obrigatórios." });
        return;
      }

      const novoAnimal = new Animal({ nome, especie, idade, tutor });
      const savedAnimal = await novoAnimal.save();
      res.status(201).json(savedAnimal);
    } catch (error) {
      console.error("Erro ao criar animal:", error);
      res.status(500).json({ message: "Erro ao criar animal." });
    }
  }

  // Buscar todos os animais
  async find(req: Request, res: Response): Promise<void> {
    try {
      const animais = await Animal.find();
      res.json(animais);
    } catch (error) {
      console.error("Erro ao buscar animais:", error);
      res.status(500).json({ message: "Erro ao buscar animais." });
    }
  }

  // Buscar um animal por ID
  async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const animal = await Animal.findById(id);

      if (!animal) {
        res.status(404).json({ message: "Animal não encontrado." });
        return;
      }

      res.json(animal);
    } catch (error) {
      console.error("Erro ao buscar animal:", error);
      res.status(500).json({ message: "Erro ao buscar animal." });
    }
  }

  // Atualizar um animal por ID
  async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedAnimal = await Animal.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!updatedAnimal) {
        res.status(404).json({ message: "Animal não encontrado." });
        return;
      }

      res.json(updatedAnimal);
    } catch (error) {
      console.error("Erro ao atualizar animal:", error);
      res.status(500).json({ message: "Erro ao atualizar animal." });
    }
  }

  // Excluir um animal por ID
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedAnimal = await Animal.findByIdAndDelete(id);

      if (!deletedAnimal) {
        res.status(404).json({ message: "Animal não encontrado." });
        return;
      }

      res.json({ message: "Animal excluído com sucesso." });
    } catch (error) {
      console.error("Erro ao excluir animal:", error);
      res.status(500).json({ message: "Erro ao excluir animal." });
    }
  }
}

export default new AnimalController();
