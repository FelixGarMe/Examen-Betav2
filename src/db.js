const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/db', {
    useNewUrlParser: true,
});

module.exports = mongoose.connection;


