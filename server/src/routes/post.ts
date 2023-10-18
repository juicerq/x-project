import express from 'express'
import { createPost, likePost, createComment } from '../controllers/post'

const router = express.Router()

// Create a new post
router.post('/', createPost)

// Like a post
router.post('/:postId/like', likePost)

// Create a comment on a post
router.post('/:postId/comment', createComment)

// Get post from id

export default router
