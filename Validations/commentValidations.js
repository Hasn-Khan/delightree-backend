const { body } = require('express-validator');

const commentValidationRules = () => {
  return [
    body('text').isString().withMessage('text must be a string'),
    body('postId').isMongoId().withMessage('PostId must be a valid MongoDB ObjectId'),
    body('authorId').isMongoId().withMessage('AuthorId must be a valid MongoDB ObjectId'),
    body('createdAt').isISO8601().withMessage('CreatedAt must be a valid date'),
  ];
};

module.exports = {
  commentValidationRules,
};
