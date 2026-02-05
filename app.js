import express from 'express';
import './Database/dbConnection.js';
import userRouter from './Modules/User/user.routes.js';
import { noteRouter } from './Modules/Note/note.routes.js';
import postRouter from './Modules/Post/post.routes.js';
import commentRouter from './Modules/Comment/comment.routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/users/', userRouter);
app.use('/api/notes/', noteRouter);
app.use('/api/posts/', postRouter);
app.use('/api/comments/',commentRouter)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


