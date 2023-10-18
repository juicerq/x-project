import { Request, Response } from 'express'
import { Post } from '../models/post'
import { Comment } from '../models/comment'
import { object, string } from 'zod'
import { ObjectId } from 'mongodb'
import { verifyToken } from '../middleware/jwtverify'

// Define a custom zod schema for ObjectId validation
const objectIdSchema = string().refine((value) => ObjectId.isValid(value), {
  message: 'Invalid ObjectId',
})

// Zod schemas for request validation
const createPostSchema = object({
  userId: objectIdSchema,
  content: string().min(1),
})

const likePostSchema = object({
  postId: objectIdSchema,
  userId: objectIdSchema,
})

const createCommentSchema = object({
  postId: objectIdSchema,
  userId: objectIdSchema,
  content: string().min(1),
})

export const createPost = async (req: Request, res: Response) => {
  try {
    await verifyToken(req, res)

    const { userId, content } = createPostSchema.parse(req.body)

    const newPost = new Post({ userId, content })
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(400).json({ error: 'Invalid data provided.' })
  }
}

export const likePost = async (req: Request, res: Response) => {
  try {
    await verifyToken(req, res)

    const { postId, userId } = likePostSchema.parse(req.body)
    const post = await Post.findById(postId)

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' })
    }

    // Convert the userId to ObjectId
    const userIdObjectId = new ObjectId(userId)

    if (!post.likes.map(String).includes(userIdObjectId.toString())) {
      post.likes.push(userIdObjectId)
      await post.save()
    }

    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({ error: 'Invalid data provided.' })
  }
}

// Create a comment on a post
export const createComment = async (req: Request, res: Response) => {
  try {
    await verifyToken(req, res)

    const { postId, userId, content } = createCommentSchema.parse(req.body)
    const post = await Post.findById(postId)

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' })
    }

    const newComment = new Comment({ user: userId, post: postId, content })
    await newComment.save()

    // Add the comment reference to the post
    post.comments.push(newComment._id)
    await post.save()

    res.status(201).json(newComment)
  } catch (error) {
    res.status(400).json({ error: 'Invalid data provided.' })
  }
}
