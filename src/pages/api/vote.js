// pages/api/vote.js
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
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, optionVoted } = req.body;

  // Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const fullNameRegex = /^[a-zA-Z\s\-]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (!fullNameRegex.test(fullName)) {
    return res.status(400).json({ error: 'Full name can only contain letters, spaces, and dashes' });
  }

  if (!['1', '2'].includes(optionVoted)) {
    return res.status(400).json({ error: 'Invalid option' });
  }

  await connectToDatabase();

  // Check if the user has already voted
  const existingVote = await Vote.findOne({ $or: [{ email }, { fullName }] });
  if (existingVote) {
    return res.status(400).json({ error: 'You have already voted' });
  }

  // Save vote
  const vote = new Vote({ fullName, email, optionVoted });
  await vote.save();

  res.status(200).json({ message: 'Vote recorded successfully' });
}
