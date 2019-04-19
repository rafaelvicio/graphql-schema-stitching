import Job from '../models/Job';

export default class Jobs {
  async all() {
    try {
      // const jobs = await Job.find();
      console.log('---> Chegou aqui!');
      const jobs = await Job.find().populate(['company']);
      console.log('--------->', jobs);
      return jobs;
    } catch (error) {
      console.log('Erro:', error);
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
