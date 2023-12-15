const express = require('express')
const morgan = require ('morgan');
const getCharById = require('./controllers/getCharById');

const server = express();
server.use(morgan('dev'));

const PORT = 3001;

server.get('/getCharById/:id',getCharById)

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})