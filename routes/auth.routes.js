import { Router } from 'express';
import { signIn, signOut, signUp } from '../controllers/auth.controller';
const authRouter = Router();

authRouter.get('/sign-up', signUp);
authRouter.get('/sign-in', signIn);
authRouter.get('/sign-out', signOut);

export default authRouter;
