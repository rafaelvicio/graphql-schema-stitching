import mongoose from 'mongoose';
import models from '../models';

export function connectMongo() {
  const URL = process.env.MONGO_URL;
  mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });
  mongoose.set('useFindAndModify', false);
}

export function loadModels() {
  return models;
}
