const Comment = require('../Models/Comment');

exports.createComment = async (req, res) => {
  try {
    const { text, postId, authorId } = req.body;
    const newComment = new Comment({ text, postId, authorId });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
