const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.static('frontend'));
// Conectar a MongoDB
mongoose.connect('mongodb+srv://marielreyna206:ocWWl5qvGjYOckbP@cluster0.dsw1q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('No se pudo conectar a MongoDB', err));

// Rutas (aún por definir)
app.use('/usuarios', require('./routes/usuarios'));
app.use('/publicaciones', require('./routes/publicaciones'));
app.use('/comentarios', require('./routes/comentarios'));

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Escuchando en el puerto ${port}...`));
