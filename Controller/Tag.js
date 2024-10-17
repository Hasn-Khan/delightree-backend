const Tag = require('../Models/Tag');

exports.saveTag = async (req, res) => {
  try {
    const { name } = req.body;

    const newTag = new Tag({ name });
    await newTag.save();

    res.status(201).json({ message: 'Tag saved successfully', data: newTag });
  } catch (error) {
    console.error('Error saving tag:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
