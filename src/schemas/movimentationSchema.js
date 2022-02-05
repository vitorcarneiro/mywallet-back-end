import joi from 'joi';

const movimentationSchema = joi.object({
  movimentation: joi.number().required(),
});

export default userSchema;