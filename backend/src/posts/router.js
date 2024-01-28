
import express from 'express';
import { upload } from '../middlewares/fileupload.js';
import { newMemoController, getMemoController, postDelete, getMemoByIdController, updateMemoByIdController } from './post.controller.js';
const postRouter = express.Router();


postRouter.put('/update/:id',  (req, res) => { updateMemoByIdController(req, res); })
postRouter.post("/", upload.single('image'), (req, res) => newMemoController(req, res))
postRouter.delete('/delete/:id', (req, res) => postDelete(req, res));
postRouter.get('/', (req, res) => { getMemoController(req, res); })
postRouter.get('/post/:id', (req, res) => { getMemoByIdController(req, res); })







export default postRouter;