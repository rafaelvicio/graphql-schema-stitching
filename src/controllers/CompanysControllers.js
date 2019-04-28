import { UserInputError, AuthenticationError } from 'apollo-server-express';

import Company from '../models/Company';

export default class Companys {
  async all(loggedUser) {
    // if (!loggedUser) throw new AuthenticationError();
    const companys = await Company.find();
    return companys;
  }

  async create(loggedUser, input) {
    try {
      if (!loggedUser) throw new AuthenticationError();
      const { _id } = loggedUser.user;
      const company = {
        ...input,
        admin: _id,
        createdBy: _id,
      };
      return await Company.create(company);
    } catch (error) {
      return null;
    }
  }

  async edit(loggedUser, input) {
    try {
      await Company.updateOne({ _id: input.id }, input);
      const company = await Company.findById(input.id);
      return company;
    } catch (error) {
      return null;
    }
  }

  async find(loggedUser, input) {
    try {
      const company = await Company.findOne(input);
      return company;
    } catch (error) {
      return null;
    }
  }
}
