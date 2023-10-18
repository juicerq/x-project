import { Request, Response } from 'express'
import { User } from '../models/user' // Import your User model

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body

    // Check if the user already exists
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists.' })
    }

    const newUser = new User({ username, email, password })
    await newUser.save()

    // You might want to generate a JWT token for the user here
    // For example, using the `jsonwebtoken` library

    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: 'Unable to register the user.' })
  }
}

// Log in a user
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    // Find the user by email
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ error: 'User not found.' })
    }

    // You would typically compare the provided password with the hashed password in the database
    // If the passwords match, you can generate a JWT token for the user

    // For simplicity, let's assume a successful login here
    res.status(200).json({ message: 'Login successful', user })
  } catch (error) {
    res.status(500).json({ error: 'Unable to log in.' })
  }
}
