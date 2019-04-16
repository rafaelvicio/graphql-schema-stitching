import Company from '../models';

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
      console.log('CHamou isso aqui', input);
      const company = await Company.create(input);
      console.log('O retorno', company);
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
