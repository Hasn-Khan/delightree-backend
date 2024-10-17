const Like = require('../Models/Likes');

exports.saveLike = async (req, res) => {
  try {
    const { postId, userId } = req.body;

    const newLike = new Like({ postId, userId });
    await newLike.save();

    res.status(201).json({ message: 'Like saved successfully', data: newLike });
  } catch (error) {
    console.error('Error saving like:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
