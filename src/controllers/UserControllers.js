import User from '../models/User';

export default class Users {
  async create(input) {
    try {
      const { email } = input;

      const userExisted = await User.findOne({ email });
      if (userExisted) {
        return null;
      }

      const user = await User.create(input);
      return user;
    } catch (error) {
      return null;
    }
  }

  async find(input) {
    try {
      const user = await User.findOne(input);
      return user;
    } catch (error) {
      return null;
    }
  }
}
