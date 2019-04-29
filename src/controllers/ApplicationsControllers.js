import { UserInputError, AuthenticationError } from 'apollo-server-express';

import Application from '../models/Application';

export default class Applications {
  async create(loggedUser, { user, job }) {
    if (!loggedUser) throw new AuthenticationError();
    try {
      const application = {
        user,
        job,
      };
      const { _id } = await Application.create(application);
      const payload = await Application.findOne({ _id }).populate([
        'user',
        'job',
      ]);
      return payload;
    } catch (error) {
      return null;
    }
  }

  async applicationsByJob(loggedUser, { job }) {
    if (!loggedUser) throw new AuthenticationError();
    try {
      const applications = await Application.find({
        job,
      }).populate(['user', 'job']);
      return applications;
    } catch (error) {
      return null;
    }
  }
}
