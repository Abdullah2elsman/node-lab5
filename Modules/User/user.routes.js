import express from 'express';
import { deleteUser, signin, signup, verifyAccount } from './user.controller.js';
import { checkEmail } from '../../Middleware/checkEmail.js';
import { validationMiddleware } from '../../Middleware/validationMiddleware.js';

const userRouter = express.Router();
userRouter.post("/signup",validationMiddleware, checkEmail, signup);

userRouter.post("/signin", checkEmail, signin)
userRouter.delete("/:id", deleteUser)
userRouter.get('/verify/:email', verifyAccount)
export default userRouter;
