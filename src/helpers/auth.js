import jwt from 'jsonwebtoken';
import authConfig from '../auth/auth.json';

export default async function generatedToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}
