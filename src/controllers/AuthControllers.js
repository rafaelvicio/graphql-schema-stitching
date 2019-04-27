import { UserInputError, AuthenticationError } from 'apollo-server-express';
import UserController from './UserControllers';

import User from '../models/User';
import {
  generatedToken,
  comparePassword,
  validateToken,
} from '../helpers/auth';

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

      console.log('--->', payload);

      return payload;
    } catch (error) {
      console.log('Deu erooooooo!', error);
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
      console.log('O erro', error);
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
