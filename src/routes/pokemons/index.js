const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');

// const ensureAuthenticated = require('../../middlewares/ensureAuthenticated');
const pokemonsController = require('../../controllers/pokemons');

const pokemonsRouter = Router();

pokemonsRouter.get(
  '/',
  pokemonsController.index,
);

module.exports = pokemonsRouter;
