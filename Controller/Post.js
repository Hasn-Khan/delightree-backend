const Post = require('../Models/Post');

exports.createPost = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    const newPost = new Post({ title, content, authorId });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
