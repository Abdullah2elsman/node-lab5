import express from 'express'
import { addComment, getComments } from './comment.controller.js';
import { verifyToken } from '../../Middleware/verifyToken.js';

const commentRouter = express.Router();
commentRouter.use(verifyToken);
commentRouter.get('/', getComments)
commentRouter.post('/', addComment);
export default commentRouter