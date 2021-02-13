const express = require('express');
const http = require('http');

const PORT = 5000 || process.env.PORT;

const app = express();
const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));