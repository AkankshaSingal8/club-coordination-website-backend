import mongoose, { Mongoose } from "mongoose";

mongoose.Promise = global.Promise;

const db: {
  mongoose: Mongoose;
  url: string;
  clubs: any; 
  users: any; 
  events: any; 
} = {
  mongoose,
  url: 'mongodb://localhost:27017/clubcoord',
  clubs: require("./club.model")(mongoose), 
  users: require("./user.model")(mongoose), 
  events: require("./event.model")(mongoose), 
};

export default db;
