import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  createdAt: { type: mongoose.Schema.Types.Date, required: true },
  content: { type: String, required: true },
})

export const Comment = mongoose.model('Comment', commentSchema)
