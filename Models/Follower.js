const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
  followerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  followeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;
