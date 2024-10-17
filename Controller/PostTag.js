const PostTag = require('../Models/PostTag');

exports.savePostTag = async (req, res) => {
  try {
    const { postId, tagId } = req.body;

    const newPostTag = new PostTag({ postId, tagId });
    await newPostTag.save();

    res.status(201).json({ message: 'PostTag saved successfully', data: newPostTag });
  } catch (error) {
    console.error('Error saving post tag:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
