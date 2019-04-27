import AuthController from '../controllers/AuthControllers';
import UserController from '../controllers/UserControllers';

export default async function authentication(req) {
  const authController = new AuthController();
  const userController = new UserController();
  const { authorization } = req.headers;

  if (!authorization) return null;

  const { id } = await authController.validate(authorization);

  if (!id) return null;

  const user = await userController.find({ _id: id });

  if (!user) return null;

  // TODO - Refresh Token

  return { authorization, user };
}
