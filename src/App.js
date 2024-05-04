const express = require('express');
const mongoose = require('./db');
const Usuario = require('./usuarioModel');

const app = express();

// Conexión a la base de datos
mongoose.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
mongoose.once('open', () => {
    console.log('Conectado a MongoDB');
});

// Ruta para obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Puerto del servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
