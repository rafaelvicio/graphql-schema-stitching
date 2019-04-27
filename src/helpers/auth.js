import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export async function generatedToken(params = {}) {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
}

export async function comparePassword(password, user) {
  return bcrypt.compare(password, user.password);
}

export async function validateToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
