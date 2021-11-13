import mongoose from 'mongoose';

const Vote = new mongoose.Schema({
  _id: { type: String, required: true },
  language: { type: String, required: true },
  providerLanguage: { type: String, required: true },
  name: { type: String, required: true },
  id: { type: String, required: true },
  sex: { type: String, required: true },
  provider: { type: String, required: true },
  flags: { type: Array, required: true },
});

export default mongoose.model('Vote', Vote);
