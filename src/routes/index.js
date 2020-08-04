const { Router } = require('express');
const usersRoute = require('./users');
const pokemonsRoute = require('./pokemons');
const teamsRoute = require('./teams');

const routes = Router();

routes.use('/health', (req, res) => res.status(200).json({
  status: 'OK',
}));
routes.use('/users', usersRoute);
routes.use('/pokemons', pokemonsRoute);
routes.use('/teams', teamsRoute);

module.exports = routes;
