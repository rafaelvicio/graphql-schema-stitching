import mongoose from 'mongoose';

const URL = process.env.MONGO_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
});

module.exports = mongoose;
