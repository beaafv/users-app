import { body, validationResult } from 'express-validator';

export const register = [
  // Validation rules
  body('username').isString().notEmpty().withMessage('Username is required'),
  body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('email').isEmail().withMessage('Valid email is required'),

  // Middleware to handle validation result
  (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export const login = [
  // Validation rules
  body('username').isString().notEmpty().withMessage('Username is required'),
  body('password').isString().notEmpty().withMessage('Password is required'),

  // Middleware to handle validation result
  (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export default {
  register,
  login,
};
