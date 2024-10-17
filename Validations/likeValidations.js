const { body } = require('express-validator');

const likeValidationRules = () => {
  return [
    body('postId').isMongoId().withMessage('PostId must be a valid MongoDB ObjectId'),
    body('userId').isMongoId().withMessage('UserId must be a valid MongoDB ObjectId'),
    body('createdAt').isISO8601().withMessage('CreatedAt must be a valid date'),
  ];
};

module.exports = {
  likeValidationRules,
};
