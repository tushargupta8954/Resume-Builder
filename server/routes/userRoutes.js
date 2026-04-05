import express from "express";
import protect from "../middlewares/authMiddleware.js";


const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/data', protect, getUserId);

export default userRouter;