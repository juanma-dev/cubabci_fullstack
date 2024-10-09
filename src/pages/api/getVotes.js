// pages/api/getVotes.js
import mongoose from 'mongoose';

// MongoDB connection
const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'freedom_poll',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Define the schema
const voteSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  optionVoted: String,
});

const Vote = mongoose.models.Vote || mongoose.model('Vote', voteSchema);

export default async function handler(req, res) {
  await connectToDatabase();

  const option1Votes = await Vote.countDocuments({ optionVoted: '1' });
  const option2Votes = await Vote.countDocuments({ optionVoted: '2' });

  res.status(200).json({ option1: option1Votes, option2: option2Votes });
}