import Job from '../models/Job';

export default class Jobs {
  async all(loggedUser) {
    try {
      // const jobs = await Job.find();
      const jobs = await Job.find().populate(['company']);
      return jobs;
    } catch (error) {
      return [];
    }
  }

  async create(loggedUser, input) {
    try {
      const job = await Job.create(input);
      return job;
    } catch (error) {
      return null;
    }
  }

  async findById(loggedUser, { _id }) {
    try {
      const job = await Job.findById(_id);
      return job;
    } catch (error) {
      return null;
    }
  }
}
