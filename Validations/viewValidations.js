const { body } = require('express-validator');

const viewValidationRules = () => {
  return [
    body('postId').isMongoId().withMessage('PostId must be a valid MongoDB ObjectId'),
    body('userId').isMongoId().withMessage('UserId must be a valid MongoDB ObjectId'),
    body('timeStamp').isISO8601().withMessage('TimeStamp must be a valid date'),
  ];
};

module.exports = {
  viewValidationRules,
};
