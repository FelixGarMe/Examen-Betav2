const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/mydatabase') // Corregido el host y puerto
    .then(db => console.log('La base de datos está conectada a:', db.connection.host))
    .catch(err => console.error('ERROR:'));
