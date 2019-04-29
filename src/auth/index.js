import UserController from '../controllers/UserControllers';

import { validateToken } from '../helpers/auth';

export default async function authentication(req) {
  const userController = new UserController();
  const { authorization } = req.headers;

  if (!authorization) return null;

  const { id } = await validateToken(authorization);

  if (!id) return null;

  const user = await userController.find({ _id: id });

  if (!user) return null;

  // TODO - Refresh Token

  return { authorization, user };
}
