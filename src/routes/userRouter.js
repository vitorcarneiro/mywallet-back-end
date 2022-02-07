import { Router } from 'express';
import { getCashflow, updateUser, deleteUser } from '../controllers/userController.js';
import { tokenValidationMiddleware } from '../middlewares/tokenValidationMiddleware.js';
import userSchemaValidationMiddleware from '../middlewares/userValidationMw.js';

const userRouter = Router();
userRouter.use(tokenValidationMiddleware);
userRouter.get("/cashflow", getCashflow);
userRouter.put("/user", userSchemaValidationMiddleware, updateUser);
userRouter.delete("/user", deleteUser);
export default userRouter;
