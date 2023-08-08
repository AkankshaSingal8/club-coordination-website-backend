import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
  name: string;
  description: string;
  domain: string;
  start: string;
  end: string;
  venue: string;
  coordinator: string;
  status: string;
  registrationDeadline: string;
  club: string;
  participants: string[];
  creationDate: string;
}

const eventSchema: Schema = new Schema({
  name: String,
  description: String,
  domain: String,
  start: String,
  end: String,
  venue: String,
  coordinator: String,
  status: String,
  registrationDeadline: String,
  club: String,
  participants: [String],
  creationDate: String,
});

export default mongoose.model<IEvent>('Event', eventSchema);
