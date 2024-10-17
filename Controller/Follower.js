const Follower = require('../Models/Follower');

exports.saveFollower = async (req, res) => {
  try {
    const { followerId, followeeId } = req.body;

    const newFollower = new Follower({ followerId, followeeId });
    await newFollower.save();

    res.status(201).json({ message: 'Follower saved successfully', data: newFollower });
  } catch (error) {
    console.error('Error saving follower:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
