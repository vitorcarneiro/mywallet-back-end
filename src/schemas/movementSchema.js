import Joi from 'joi';

const movementSchema = Joi.object({
  description: Joi.string().required(),
  movement: Joi.number().required(),
});

export default movementSchema;