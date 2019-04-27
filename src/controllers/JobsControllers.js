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

  async find(loggedUser, input) {
    try {
      const job = await Job.findOne(input);
      return job;
    } catch (error) {
      return null;
    }
  }
}
