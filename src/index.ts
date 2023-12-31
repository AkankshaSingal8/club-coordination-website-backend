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
import clubRoutes from "./routes/clubs.routes";
import eventRoutes from './routes/events.routes';

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

const url = 'mongodb://127.0.0.1:27017/clubcoord'; // DB URI

mongoose.Promise = Promise;
const connectOptions: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(url, connectOptions).then(() => {
    console.log('MongoDB is connected');
}).catch((err) => {
    console.log(err);
});

clubRoutes(app);
// app.use('/clubs/events', eventRoutes);
eventRoutes(app);

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
