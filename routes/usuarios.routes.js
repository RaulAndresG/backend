const express = require('express');
const router = express.Router();
const {
  obtenerUsuarios,
  postUsuario,
  deleteUsuario,
  putUsuario,
} = require('../Controllers/usuarios.controllers.js');

router.get('/', obtenerUsuarios);

router.post('/', postUsuario);

router.put('/:id', putUsuario);

router.delete('/:id', deleteUsuario);

module.exports = router;
