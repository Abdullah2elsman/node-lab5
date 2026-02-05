import express from 'express'
import { addPost, getPosts } from './post.controller.js';
import { postValidationMiddleware } from '../../Middleware/validationMiddleware.js';
import { verifyToken } from '../../Middleware/verifyToken.js';

const postRouter = express.Router();
postRouter.use(verifyToken);
postRouter.get('/', getPosts)
postRouter.post('/', postValidationMiddleware, addPost);
export default postRouter