import { UserInputError, AuthenticationError } from 'apollo-server-express';

import User from '../models/User';
import {
  generatedToken,
  comparePassword,
  validateToken,
} from '../helpers/auth';

export default class Auth {
  async create(input) {
    try {
      const { email } = input;

      const userExisted = await User.findOne({ email });
      if (userExisted) {
        throw new AuthenticationError();
      }

      const user = await User.create(input);
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

  async find(input) {
    try {
      return User.findOne({ _id: input });
    } catch (error) {
      return null;
    }
  }

  async validate(input) {
    try {
      return validateToken(input);
    } catch (error) {
      return null;
    }
  }
}
