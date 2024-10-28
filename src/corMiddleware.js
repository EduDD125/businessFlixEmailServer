const cors = require('cors');

const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: `http://localhost:${PORT}`,
    methods:'GET, POST, PUT, DELETE'
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;