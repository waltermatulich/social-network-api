const mongoose = require('mongoose');
const { Schema } = mongoose;

const thoughtSchema = new Schema({
  // Thought content
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  // Thought author
  username: { type: String, required: true },
  // Thought creation timestamp
  createdAt: { type: Date, default: Date.now },
  // Reactions associated with the thought
  reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }]
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
