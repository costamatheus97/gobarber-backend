// Dependencies
import 'reflect-metadata';
import express from 'express';

// Routes
import Routes from './routes';

import './database'

const app = express();

app.use(express.json());
app.use(Routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});