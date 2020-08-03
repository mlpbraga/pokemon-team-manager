const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');

// const ensureAuthenticated = require('../../middlewares/ensureAuthenticated');
const usersController = require('../../controllers/users');

const usersRouter = Router();

usersRouter.post(
  '/',
  celebrate({
    body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.get(
  '/:id',
  usersController.show,
);

module.exports = usersRouter;
