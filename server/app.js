import express, { response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

import { router as UserRouter } from './api/users.js';
import { router as ProductRouter } from './api/products.js';
import { router as CartRouter } from './api/carts.js';

import db from './config/db.js';

db();

const app = express();
const _dirname = path.dirname('');
const buildPath = path.join(_dirname, '../client/dist');

process.on('uncaughtException', function (error) {
  console.log(error.stack);
});

app.use(express.static(buildPath));

app.use(express.json());
app.use(cors({ credentials: true, origin: 'http://99.79.60.159:5050' }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.sendFile(path.join(_dirname, '../client/dist/index.html'), (err) => {
    if (err) res.status(500).send(err);
  });
});

app.use('/users', UserRouter);
app.use('/products', ProductRouter);
app.use('/cart', CartRouter);

app.listen(process.env.PORT);
console.log('Server is listening on port ' + process.env.PORT);
console.log(path.join(_dirname, '../client/dist/index.html'));
