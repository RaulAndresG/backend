const express = require('express');
const router = express.Router();
const {
  obtenerIndicadores,
  postIndicador,
  deleteIndicador,
  putIndicador,
} = require('../Controllers/indicadores.controllers.js');

// Ruta para obtener todos los registros de Indicadores
router.get('/', obtenerIndicadores);

router.delete('/:id', deleteIndicador);

router.post('/', postIndicador);

router.put('/:id', putIndicador);

module.exports = router;
