import { UserInputError, AuthenticationError } from 'apollo-server-express';
import _ from 'lodash';

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

  async applicationsByJob(loggedUser, input) {
    if (!loggedUser) throw new AuthenticationError('');
    try {
      const payload = _.pickBy(input, _.identity);
      const applications = await Application.find(payload).populate([
        'user',
        'job',
      ]);
      return applications;
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  }
}
