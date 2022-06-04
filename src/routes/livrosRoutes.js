import express from "express";
import livrosController from "../controllers/livrosController.js";

const router = express.Router()

router
    .get('/livros', livrosController.listarLivros)
    .get('livros/busca', livrosController.listarLivroPorAutor)
    .get('/livros/:id', livrosController.listarLivro)
    .post('/livros', livrosController.cadastrarLivros)
    .put('/livros/:id', livrosController.atualizarLivro)
    .delete('/livros/:id',livrosController.excluirLivro)

export default router;