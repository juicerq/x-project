import { Post } from '../models/post'
import { Comment } from '../models/comment'
import { Request, Response } from 'express'

// Create a new post
export const createPost = async (req: Request, res: Response) => {
  try {
    const { user, content } = req.body
    const newPost = new Post({ user, content })
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ error: 'Unable to create a post.' })
  }
}

// Like a post
export const likePost = async (req: Request, res: Response) => {
  try {
    const { postId, userId } = req.body
    const post = await Post.findById(postId)

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' })
    }

    if (!post.likes.includes(userId)) {
      post.likes.push(userId)
      await post.save()
    }

    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ error: 'Unable to like the post.' })
  }
}

// Create a comment on a post
export const createComment = async (req: Request, res: Response) => {
  try {
    const { postId, userId, content } = req.body
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
    res.status(500).json({ error: 'Unable to create a comment.' })
  }
}
