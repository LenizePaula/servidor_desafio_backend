const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const {validarCliente} = require('../middlewares/clienteMiddleware');

router
    .get('/', clienteController.buscarTodos)
    .post('/', validarCliente, clienteController.salvar)
    .put('/:id', validarCliente, clienteController.atualizar)
    .delete('/:id', clienteController.remover);

module.exports = router;
