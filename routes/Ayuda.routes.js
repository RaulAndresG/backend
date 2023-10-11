const express = require('express');
const router = express.Router();
const {
  obtenerAyuda,
  postAyuda,
  deleteAyuda,
  putAyuda,
} = require('../Controllers/ayuda.controllers.js');

// Ruta para obtener todos los registros de Ayuda
router.get('/', obtenerAyuda);

router.delete('/:id', deleteAyuda);

router.post('/', postAyuda);

router.put('/:id', putAyuda);

module.exports = router;
