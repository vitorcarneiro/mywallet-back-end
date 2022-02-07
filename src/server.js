import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const server = express();
server.use(express.json(), cors(), router);

server.use(router);

server.listen(5000, () => {
  console.log('Server started on port http://localhost:5000/');
});
