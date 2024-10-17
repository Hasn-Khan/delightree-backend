const mongoose = require('mongoose');

const postTagSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  tagId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tag', required: true },
  createdAt: { type: Date, default: Date.now }
});

const PostTag = mongoose.model('PostTag', postTagSchema);

module.exports = PostTag;
