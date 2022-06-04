import express from "express";
import autoresController from "../controllers/autoresController.js";

const router = express.Router()

router
    .get('/autores', autoresController.listarAutores)
    .get('/autores/:id', autoresController.listarAutor)
    .post('/autores', autoresController.cadastrarAutores)
    .put('/autores/:id', autoresController.atualizarAutor)
    .delete('/autores/:id',autoresController.excluirAutor)

export default router;