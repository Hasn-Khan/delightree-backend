// validations/userValidation.js

const { body } = require('express-validator');

const userValidationRules = () => {
  return [
    body('username').isString().withMessage('Username must be a string'),
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('age').isNumeric().withMessage('Age must be a number'),
    body('createdAt').isISO8601().withMessage('CreatedAt must be a valid date'),
  ];
};

module.exports = {
  userValidationRules,
};
