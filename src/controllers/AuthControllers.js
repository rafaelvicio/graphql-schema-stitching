import User from '../models/User';
import generatedToken from '../helpers/auth';

export default class Auth {
  async create(input) {
    try {
      console.log('input de create user: ', input);
      // TODO - Verify email
      // TODO - Remove Passworld from response
      // TODO - Return Token
      const user = await User.create(input);
      user.password = undefined;
      const token = await generatedToken({ id: 1000 });
      console.log('-------------->', token);
      return {
        user,
        token,
      };
    } catch (error) {
      console.log('Caiu aqui:', error);
      return null;
    }
  }

  async login(input) {
    try {
      console.log('input de login user: ', input);
      return null;
    } catch (error) {
      return null;
    }
  }

  async find(input) {
    try {
      console.log('input de find user: ', input);
      return null;
    } catch (error) {
      return null;
    }
  }
}
