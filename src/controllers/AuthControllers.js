import { UserInputError, AuthenticationError } from 'apollo-server-express';
import UserController from './UserControllers';

import User from '../models/User';
import {
  generatedToken,
  comparePassword
} from '../helpers/auth';

export default class Auth {
  async register(input) {
    try {
      const user = UserController.create(input);

      if (!user) {
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
