import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import  postRouter from './src/posts/router.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use('/posts', postRouter);


export default app;
