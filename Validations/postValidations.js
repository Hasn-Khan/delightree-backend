const { body } = require('express-validator');

const postValidationRules = () => {
  return [
    body('title').isString().withMessage('Title must be a string'),
    body('content').isString().withMessage('Content must be a string'),
    body('authorId').isMongoId().withMessage('AuthorId must be a valid MongoDB ObjectId'),
    body('createdAt').isISO8601().withMessage('CreatedAt must be a valid date'),
  ];
};

module.exports = {
  postValidationRules,
};
