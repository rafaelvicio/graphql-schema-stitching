import { UserInputError, AuthenticationError } from 'apollo-server-express';
import Job from '../models/Job';

export default class Jobs {
  async all(loggedUser) {
    try {
      const jobs = await Job.find().populate(['company']);
      return jobs;
    } catch (error) {
      return [];
    }
  }

  async create(loggedUser, input) {
    try {
      if (!loggedUser) throw new AuthenticationError();
      const job = {
        ...input,
        createdBy: loggedUser.id,
      };
      return await Job.create(job);
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
