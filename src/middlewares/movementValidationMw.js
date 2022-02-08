import movementSchema from "../schemas/movementSchema.js";

export default function movementValidation(req, res, next) {
  const validation = movementSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    return res.status(422).send(validation.error.message);
  }
  next();
}