const express = require('express');
const router = express.Router();
const {
  obtenerRoles,
  postRol,
  deleteRol,
  putRol,
} = require('../Controllers/roles.controllers.js');

router.get('/', obtenerRoles);

router.post('/', postRol);

router.put('/:id', putRol);

router.delete('/:id', deleteRol);

module.exports = router;
