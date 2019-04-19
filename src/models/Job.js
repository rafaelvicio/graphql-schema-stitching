import mongoose from '../database';

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
    },
    remote: {
      type: Boolean,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'companys',
    },
    active: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('jobs', JobSchema);
