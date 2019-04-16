import Job from '../models';

export default class Jobs {
  async all() {
    try {
      const jobs = await Job.find();
      return jobs;
    } catch (error) {
      return [];
    }
  }

  async create(input) {
    try {
      const job = await Job.create(input);
      return job;
    } catch (error) {
      return null;
    }
  }

  async findById({ _id }) {
    try {
      const job = await Job.findById(_id);
      return job;
    } catch (error) {
      return null;
    }
  }
}
