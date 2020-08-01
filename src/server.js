/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const AppError = require('./commons/erros/AppError');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

// error handlers
app.use(errors({}, 400));
app.use((error, req, res) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3004, () => {
  console.log('🚀 Server started on port 3004!');
});
