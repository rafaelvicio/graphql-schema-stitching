import Company from '../models/Company';

export default class Companys {
  async all() {
    try {
      const companys = await Company.find();
      return companys;
    } catch (error) {
      return [];
    }
  }

  async create(input) {
    try {
      const company = await Company.create(input);
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
