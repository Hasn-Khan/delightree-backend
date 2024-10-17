const { body } = require('express-validator');

const followerValidationRules = () => {
  return [
    body('followerId').isMongoId().withMessage('FollowerId must be a valid MongoDB ObjectId'),
    body('followeeId').isMongoId().withMessage('FolloweeId must be a valid MongoDB ObjectId'),
    body('createdAt').isISO8601().withMessage('CreatedAt must be a valid date'),
  ];
};

module.exports = {
  followerValidationRules,
};
