const { body } = require('express-validator');

const tagValidationRules = () => {
  return [
    body('name').isString().withMessage('Name must be a string'),
  ];
};

module.exports = {
  tagValidationRules,
};
