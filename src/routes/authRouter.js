import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController.js';
import userValidation from '../middlewares/userValidationMw.js';

const authRouter = Router();
authRouter.post("/sign-up", userValidation, signUp);
authRouter.post("/sign-in", signIn);
export default authRouter;

