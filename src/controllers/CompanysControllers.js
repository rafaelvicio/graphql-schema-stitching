import { UserInputError, AuthenticationError } from 'apollo-server-express';

import Company from '../models/Company';

export default class Companys {
  async all(loggedUser) {
    if (!loggedUser) throw new AuthenticationError();
    const companys = await Company.find();
    return companys;
  }

  async create(input) {
    try {
      const company = await Company.create(input);
      return company;
    } catch (error) {
      return null;
    }
  }

  async edit(input) {
    try {
      await Company.updateOne({ _id: input.id }, input);
      const company = await Company.findById(input.id);
      return company;
    } catch (error) {
      return null;
    }
  }

  async findById({ _id }) {
    try {
      const company = await Company.findById(_id);
      return company;
    } catch (error) {
      return null;
    }
  }
}
