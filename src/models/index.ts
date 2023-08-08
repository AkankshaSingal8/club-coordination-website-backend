import mongoose, { Mongoose } from "mongoose";
import { Clubs } from "./clubs.model";
import { Users } from "./users.model"; 

import { IEvent } from "./events.model"; // Change 'Events' to 'IEvent'


mongoose.Promise = global.Promise;

interface DB {
  mongoose: Mongoose;
  url: string;
  clubs: mongoose.Model<Clubs>;
  users: mongoose.Model<Users>; 
  events: mongoose.Model<IEvent>; 
}

const db: DB = {
  mongoose,
  url: 'mongodb://localhost:27017/clubcoord',
  clubs: mongoose.model<Clubs>("Club", new mongoose.Schema({})), 
  users: mongoose.model<Users>("User", new mongoose.Schema({})), 
  events: mongoose.model<IEvent>("Event", new mongoose.Schema({})), 
};

export default db;
