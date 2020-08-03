/* eslint-disable no-console */
require('express-async-errors');

const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const { sequelize } = require('./database/models');
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
    message: error.message || 'Internal Server Error',
  });
});

const tesDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

app.listen(3004, () => {
  tesDbConnection()
    .then(() => console.log('🚀 Server started on port 3004!'))
    .catch((err) => console.log(err));
});
