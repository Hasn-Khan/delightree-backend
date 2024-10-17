const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();

const userController = require('./Controller/User');
const postController = require('./Controller/Post');
const commentController = require('./Controller/Comment');
const viewController = require('./Controller/View');
const likeController = require('./Controller/Likes');
const followerController = require('./Controller/Follower');
const tagController = require('./Controller/Tag');
const postTagController = require('./Controller/PostTag');

const { userValidationRules } = require('./Validations/userValidations');
const { postValidationRules } = require('./Validations/postValidations');
const { commentValidationRules } = require('./Validations/commentValidations');
const { viewValidationRules } = require('./Validations/viewValidations');
const { likeValidationRules } = require('./Validations/likeValidations');
const { followerValidationRules } = require('./Validations/followerValidations');
const { tagValidationRules } = require('./Validations/tagValidations');
const { postTagValidationRules } = require('./Validations/postTagValidations');



const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};


router.post('/users', userValidationRules(), validate, userController.createUser);
router.post('/posts', postValidationRules(), validate, postController.createPost);
router.post('/comments', commentValidationRules(), validate, commentController.createComment);
router.post('/saveViews', viewValidationRules(), validate, viewController.saveView);
router.post('/saveLikes', likeValidationRules(), validate, likeController.saveLike);
router.post('/saveFollowers', followerValidationRules(), validate, followerController.saveFollower);
router.post('/saveTags', tagValidationRules(), validate, tagController.saveTag);
router.post('/savePostTags', postTagValidationRules(), validate, postTagController.savePostTag);
router.get('/stats', userController.getUserStatsByAgeRange);

module.exports = router;
