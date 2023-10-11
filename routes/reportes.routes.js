const express = require('express');
const router = express.Router();
const {
  postReporte,
  obtenerReportes,
  putReporte,
  deleteReporte,
} = require('../Controllers/reportes.controllers.js');

router.post('/', postReporte);

router.get('/', obtenerReportes);

router.put('/:id', putReporte);

router.delete('/:id', deleteReporte);

module.exports = router;
