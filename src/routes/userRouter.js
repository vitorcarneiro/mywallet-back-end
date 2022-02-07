import { Router } from 'express';
import { getCashflow, addMovement} from '../controllers/cashflowController.js';
import { tokenValidationMiddleware } from '../middlewares/tokenValidationMiddleware.js';
import movementValidation from '../middlewares/movementValidationMw.js';

const userRouter = Router();
userRouter.use(tokenValidationMiddleware);
userRouter.get("/cashflow", getCashflow);
userRouter.post("/addMovement/:type", movementValidation, addMovement);
export default userRouter;
