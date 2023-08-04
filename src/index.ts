import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { Request, Response } from "express";
//import eventsRoutes from './router/events';
//import router from './router';
import mongoose from 'mongoose';
import { ConnectOptions } from "mongoose";

const app = express();
app.use(cors({
    credentials: true,
  }));
  
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// app.get('/api', (req: express.Request, res: express.Response) => {
//     return res.send('Hello World!');
// });

const url = 'mongodb://localhost:27017/clubcoord'; // DB URI

mongoose.Promise = Promise;
const connectOptions: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(url, connectOptions).then(() => {
    console.log('MongoDB is connected');
}).catch((err) => {
    console.log('MongoDB connection unsuccessful');
});
app.listen(8080);
