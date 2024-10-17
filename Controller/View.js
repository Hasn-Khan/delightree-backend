const View = require('../Models/Views');

exports.saveView = async (req, res) => {
  try {
    const { postId, userId } = req.body;

    const newView = new View({ postId, userId });
    await newView.save();

    res.status(201).json({ message: 'View saved successfully', data: newView });
  } catch (error) {
    console.error('Error saving view:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
