import Joi from 'joi';

const movementSchema = Joi.object({
  movement: Joi.number().required(),
});

export default movementSchema;