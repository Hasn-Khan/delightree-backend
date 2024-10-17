const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timeStamp: { type: Date, default: Date.now }
});

const View = mongoose.model('View', viewSchema);

module.exports = View;
