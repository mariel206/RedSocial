const express = require('express');
const router = express.Router();

// Ruta de ejemplo para publicaciones
router.get('/', (req, res) => {
  res.send('Ruta de publicaciones funcionando');
});

module.exports = router;
