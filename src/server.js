import express from 'express';
import router from './routes/index.js';

const server = express();
server.use(express.json());

server.use(router);

server.listen(5000, () => {
  console.log('Server started on port http://localhost:5000/');
});
