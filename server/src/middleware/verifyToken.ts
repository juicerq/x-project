import { Request, Response } from 'express'
import { config } from 'dotenv'

config()
export const JWT_SECRET = process.env.JWT_SECRET

export async function verifyToken(req: Request, res: Response) {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  return res.status(201).json({ error: 'Authorized' })
}
