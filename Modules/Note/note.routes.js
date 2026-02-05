import express from 'express'
import { createNote, deleteNote, getNotes } from './note.controller.js'
import { verifyToken } from '../../Middleware/verifyToken.js';

export const noteRouter = express.Router()
noteRouter.use(verifyToken);
noteRouter.post("/create-note", createNote)
noteRouter.get("/", getNotes)
noteRouter.delete("/:id", deleteNote)