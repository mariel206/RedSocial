const express = require('express');
const router = express.Router();

// Ruta de ejemplo para usuarios
router.get('/', (req, res) => {
  res.send('Ruta de usuarios funcionando');
});

module.exports = router;
