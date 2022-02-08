import userSchema from "../schemas/userSchema.js";

export default function userValidation(req, res, next) {
  const validation = userSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    return res.status(422).send(validation.error.message);
  }
  next();
}