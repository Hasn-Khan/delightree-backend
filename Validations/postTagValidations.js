const { body } = require('express-validator');

const postTagValidationRules = () => {
  return [
    body('postId').isMongoId().withMessage('PostId must be a valid MongoDB ObjectId'),
    body('tagId').isMongoId().withMessage('TagId must be a valid MongoDB ObjectId'),
    body('createdAt').isISO8601().withMessage('CreatedAt must be a valid date'),
  ];
};

module.exports = {
  postTagValidationRules
};
