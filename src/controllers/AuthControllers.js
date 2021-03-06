import { UserInputError, AuthenticationError } from 'apollo-server-express';
import UserController from './UserControllers';

import User from '../models/User';
import { generatedToken, comparePassword } from '../helpers/auth';

const userController = new UserController();

export default class Auth {
  async register(input) {
    try {
      const user = await userController.create(input);
      user.password = undefined;

      if (!user) {
        throw new AuthenticationError();
      }

      const token = await generatedToken({ id: user._id });

      const payload = {
        user,
        token,
      };

      return payload;
    } catch (error) {
      return null;
    }
  }

  async login(input) {
    try {
      const { email, password } = input;
      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        throw new AuthenticationError();
      }

      const eigual = await comparePassword(password, user);

      if (!eigual) {
        throw new AuthenticationError();
      }

      const token = await generatedToken({ id: user._id });

      return {
        user,
        token,
      };
    } catch (error) {
      return null;
    }
  }
}
