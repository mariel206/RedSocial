const express = require('express');
const router = express.Router();

// Ruta de ejemplo para comentarios
router.get('/', (req, res) => {
  res.send('Ruta de comentarios funcionando');
});

module.exports = router;
