const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const {validarProduto} = require('../middlewares/produtoMiddleware');

router
    .get('/', produtoController.buscarTodos)
    .post('/', validarProduto, produtoController.salvar)
    .put('/:id', validarProduto, produtoController.atualizar)
    .delete('/:id', produtoController.remover);

module.exports = router;
