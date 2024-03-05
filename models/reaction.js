const mongoose = require('mongoose');
const { Schema } = mongoose;

const reactionSchema = new Schema({
  // Reference to the thought or other entity to which the reaction belongs
  thoughtId: { type: Schema.Types.ObjectId, ref: 'Thought', required: true },
  // Reaction content
  reactionBody: { type: String, required: true },
  // Reaction author
  username: { type: String, required: true },
  // Reaction creation timestamp
  createdAt: { type: Date, default: Date.now }
});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
