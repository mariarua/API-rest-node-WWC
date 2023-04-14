const Joi = require("joi");

const createProductSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().min(5).required(),
  price: Joi.number().required(),
  quantity: Joi.number().positive().require(),
  category: Joi.string().required(),
});

module.exports = { createProductSchema };
