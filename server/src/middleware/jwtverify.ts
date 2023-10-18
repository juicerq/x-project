import { Request, Response } from 'express'

export const JWT_SECRET = 'juisecretkey93812382193821983'

export async function verifyToken(req: Request, res: Response) {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  return res.status(201).json({ error: 'Authorized' })
}
