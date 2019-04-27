import AuthController from '../controllers/AuthControllers';

export default async function authentication(req) {
  const authController = new AuthController();
  const { authorization } = req.headers;

  if (!authorization) return null;

  const { id } = await authController.validate(authorization);

  if (!id) return null;

  const user = await authController.find(id);

  if (!user) return null;

  // TODO - Refresh Token

  return { authorization, user };
}
