import { Request, Response } from 'express'
import { User } from '../models/user'
import { JWT_SECRET } from '../middleware/jwtverify'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { object, string } from 'zod'

const jwtSecret = JWT_SECRET
const SALT_ROUNDS = 10

// Zod schemas for request validation
const registrationSchema = object({
  username: string(),
  email: string().email(),
  password: string().min(8),
})

const loginSchema = object({
  email: string().email(),
  password: string().min(8),
})

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = registrationSchema.parse(req.body)

    // Check if the user already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists.' })
    }

    // Hash the password before storing for safety
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save()

    // Generate a JWT token for the user
    const token = jwt.sign(
      { userId: newUser._id, userEmail: newUser.email },
      jwtSecret,
      {
        expiresIn: '7d',
      },
    )

    res.status(201).json({ user: newUser, token })
    return token
  } catch (error) {
    res.status(400).json({ error: 'Invalid data provided.' })
  }
}

// Log in a user
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = loginSchema.parse(req.body)

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ error: 'User not found.' })
    }

    // Compare the hashed password with the one in the db
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password.' })
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: '7d',
    })

    res.status(200).json({ message: 'Login successful', user, token })
    return token
  } catch (error) {
    res.status(400).json({ error: 'Invalid data provided.' })
  }
}
