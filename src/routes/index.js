const { Router } = require('express');
const usersRoute = require('./users');

const routes = Router();

routes.use('/health', (req, res) => res.status(200).json({
  status: 'OK',
}));
routes.use('/users', usersRoute);

module.exports = routes;
